import Head from "next/head";
import Layout from "../../src/components/layout";
import { getSortedPostsData } from "../../src/lib/posts";
import { GetStaticProps } from "next";
import { PostData } from "../../src/models/PostData";
import BlogArea from "../../src/components/organizms/blog/blog_area"
import ProfileArea from "../../src/components/organizms/blog/profile-area"
import SideBarPosts from "../../src/components/organizms/blog/sidebar-posts"
import styled from "@emotion/styled"

export default function Blog({
  allPostsData,
}: {
  allPostsData: PostData[]
}) {
  return (
    <Layout blog>
      <Head>
        <title>ブログ</title>
      </Head>
      <Row>
        <BlogContainer>
          <BlogArea allPostsData={allPostsData} />
        </BlogContainer>
        <SideBar>
          <div>
            <ProfileArea />
            <SideBarPosts allPostsData={allPostsData} />
          </div>
        </SideBar>
      </Row>
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

const Row = styled.ul`
display: flex;
justify-content:center;
flex-direction: row;
list-style: none;
padding: 0;
margin: 0;
`

const BlogContainer = styled.div`
displey:flex;
flex-direction:column;
width: 60 vw;
background:white;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

@media (min-width: 1024px) {
 margin:0px 20px;
}
`

const SideBar = styled.div`
displey:flex;
flex-direction:column;
width: 300px;
background:white;
margin-right:20px;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

@media (max-width: 1024px) {
  display:none;
}
`
