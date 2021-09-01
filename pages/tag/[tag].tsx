import Head from "next/head";
import Layout from "../../src/components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { PostData } from "src/models/PostData";
import { getAllTagPosts, getAllPostTags } from "../../src/lib/posts";
import BlogArea from "../../src/components/organizms/blog/blog_area"
import ProfileArea from "../../src/components/organizms/blog/profile-area"
import SideBarPosts from "../../src/components/organizms/blog/sidebar-posts"
import styled from "@emotion/styled"


//GetStaticPathsの返却値の型は以下のように決まっている
//paths: Array<string | { params: P; locale?: string }>
//fallback: boolean | 'blocking'
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostTags();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const allTagPostsData = getAllTagPosts(params.tag);
    return {
        props: {
            allTagPostsData,
        },
    };
};

export default function TagPage({
    allTagPostsData
}: {
    allTagPostsData: PostData[]
}) {
    return (
        <Layout blog>
          <Head>
            <title>ブログ</title>
          </Head>
          <Row>
            <BlogContainer>
              <BlogArea allPostsData={allTagPostsData} />
            </BlogContainer>
            <SideBar>
              <div>
                <ProfileArea />
                <SideBarPosts allPostsData={allTagPostsData} />
              </div>
            </SideBar>
          </Row>
        </Layout>
      );
}

const Row = styled.ul`
display: flex;
justify-content:center;
list-style: none;
padding: 0;
margin: 0;
`

const BlogContainer = styled.div`
displey:flex;
flex-direction:column;
width: 60 vw;
background:white;

@media (min-width: 1024px) {
 margin:0px 20px;
}
`

const SideBar = styled.div`
displey:flex;
flex-direction:column;
width: 350px;
background:white;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

@media (max-width: 1024px) {
  display:none;
}
`
