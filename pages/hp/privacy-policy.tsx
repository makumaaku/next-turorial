import Head from "next/head";
import Layout from "../../src/components/layout";
import BlogArea from "../../src/components/organizms/blog/blog_area"
import { PostData } from "../../src/models/PostData"
import { GetStaticProps } from "next";
import { getAllPostsData, getSortedPostsData } from "../../src/lib/posts";

export default function Blog({
    allPPData,
}: {
    allPPData: PostData[]
}) {
    return (
        <Layout>
            <Head>
                <title>プライバシーポリシー</title>
            </Head>

            <BlogArea allPostsData={allPPData}isPost={false} />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const isPost = false;
    const allPPData = getAllPostsData(isPost);
    return {
        props: {
            allPPData,
        },
    };
};
