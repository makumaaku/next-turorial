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
      </Head>
      <Container>
        <h1 >{postData.title}</h1>
        <Image priority src={postData.imageUrl} height={150} width={250} />
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

///これでタグごとに色々できるっぽい
const Container = styled.article`

`
