import Head from "next/head";
import Layout from "../../src/components/layout";
import BlogArea from "../../src/components/organizms/blog/blog_area"
import { PostData } from "../../src/models/PostData"
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../src/lib/posts";

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

      <BlogArea allPostsData={allPostsData} isPost={true} />
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
