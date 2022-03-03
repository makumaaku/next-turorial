import React from "react";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../src/lib/posts";
import { PostData } from "../src/models/PostData";
import styled from "@emotion/styled";
import Layout from "../src/components/layout";
import AppArea from "../src/components/organizms/appList/app_area";
import BlogArea from "../src/components/organizms/blog/blog_area";
import CoutactUsPage from "../src/components/organizms/contact/contact-area";

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <Layout home>
      <Container>
        <AppArea />
        <BlogArea allPostsData={allPostsData} isPost={true} />
        <CoutactUsPage />
      </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
