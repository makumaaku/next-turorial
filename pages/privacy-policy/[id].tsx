import React from "react";
import Layout from "../../src/components/layout";
import { getAllPostIds, getPostData } from "../../src/lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import { PostData } from "../../src/models/PostData";
import DateTag from "../../src/components/molecules/tag/dateTag";
import BlogTag from "../../src/components/molecules/tag/blogTag";
import styled from "@emotion/styled";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    imageUrl: string;
    tag: string;
    contentHtml: string;
  };
  allPostsData: PostData[];
}) {
  return (
    <Layout blog>
      <Head>
        <title>{postData.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"
        ></link>
      </Head>
      <BlogContainer>
        <h1>{postData.title}</h1>
        <Row>
          <DateTag dateString={postData.date} />
          <W8></W8>
          <BlogTag tag={postData.tag} />
        </Row>
        <H16></H16>
        <Image priority src={postData.imageUrl} height={400} width={800} />
        <GithubMarkdown>
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="markdown-body"
          />
        </GithubMarkdown>
      </BlogContainer>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const isPost = false;
  const paths = getAllPostIds(isPost);
  return {
    paths,
    fallback: false,
  };
};

//このファイルのPostはgetStaticPropsでreturnしたものを受け取っている
//contextはgetStaticPathsのpaths内のobjectを参照する
//参考https://zenn.dev/eitches/articles/2021-0424-getstaticprops-type
export const getStaticProps: GetStaticProps = async (context) => {
  const isPost = false;
  const postData = await getPostData(context.params.id as string,isPost);
  return {
    props: {
      postData,
    },
  };
};

//ページの大元にpaddingが入っていて、space-between使えない？
const Row = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  // justify-content: space-between;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 1024px) {
    max-width: 80vw;
  }
  @media (min-width: 1024px) {
    margin: 0px 20px;
    max-width: 60vw;
    padding: 60px;
  }
`;

const GithubMarkdown = styled.div`
  .markdown-body {
    box-sizing: border-box;
    //表示用
    min-width: 80 vw;
    max-width: 100 vw;
    margin: 0 auto;
    padding-top: 48px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
      max-width: 80%;
    }
  }
`;

const H16 = styled.div`
  height: 16px;
`;

const W8 = styled.div`
  width: 8px;
`;
