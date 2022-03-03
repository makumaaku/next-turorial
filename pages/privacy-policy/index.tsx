import Head from "next/head";
import Layout from "../../src/components/layout";
import { getAllPostsData } from "../../src/lib/posts";
import { GetStaticProps } from "next";
import { PostData } from "../../src/models/PostData";
import BlogArea from "../../src/components/organizms/blog/blog_area"
import styled from "@emotion/styled"

export default function Blog({
    allPostsData,
}: {
    allPostsData: PostData[]
}) {
    return (
        <Layout blog>
            <Head>
                <title>プライバシーポリシー</title>
            </Head>
            <BlogContainer>
                <BlogArea allPostsData={allPostsData} isPost={false} />
            </BlogContainer>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const isPost = false;
    const allPostsData = getAllPostsData(isPost);
    return {
        props: {
            allPostsData,
        },
    };
};

const BlogContainer = styled.div`
displey:flex;
flex-direction:column;
width: 60 vw;
background:white;

@media (min-width: 1024px) {
 margin:0px 20px;
}
`


