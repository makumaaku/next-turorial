import Layout from "../../src/components/layout";
import { getAllPostIds, getPostData } from "../../src/lib/posts";
import Head from "next/head";
import Image from "next/image";
import Date from "../../src/components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import styled from "@emotion/styled"



export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    imageUrl: string;
    contentHtml: string;
  };
}) {

  return (

    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"></link>
      </Head>
      <Container>
        <h1 >{postData.title}</h1>
        <Image priority src={postData.imageUrl} height={350} width={500} />
        <div>
          <Date dateString={postData.date} />
        </div>
        <GithubMarkdown>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="markdown-body"/>
        </GithubMarkdown>
        </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};


const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

const GithubMarkdown = styled.div`
.markdown-body {
  box-sizing: border-box;
  min-width: 80 vw;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
    max-width: 300px;
  }
}
`
