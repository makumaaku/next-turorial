import Head from "next/head";
import Layout from "../../src/components/layout";
import { getSortedPostsData } from "../../src/lib/posts";
import { GetStaticProps } from "next";
import { PostData } from "../../src/models/PostData";
import BlogArea from "../../src/components/organizms/blog/blog_area"

export default function Blog({
  allPostsData,
}: {
  allPostsData: PostData[]
}) {
  return (
    <Layout>
      <Head>
        <title>ブログ</title>
      </Head>
      <BlogArea allPostsData={allPostsData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
