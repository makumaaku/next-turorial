import { GetStaticProps } from "next";
import { getSortedPostsData } from "../src/lib/posts";
import { PostData } from "../src/models/PostData";
import styled from "@emotion/styled"
import Layout from "../src/components/layout";
import AppArea  from "../src/components/organizms/appList/app_area";
import BlogArea  from "../src/components/organizms/blog/blog_area";
import CoutactUsPage  from "../src/components/organizms/contact/contact-area";


export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <Layout home>
      <Container>
      <AppArea />
      <BlogArea allPostsData={allPostsData}/>
      <CoutactUsPage />
        <div>
          <p>
            (This is a sample website - you’ll be building a site like this in{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        </div>
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

const H2 = styled.h2`
text-align:center;
text-decoration:underline black;
`;

const List = styled.ul`
display: flex;
justify-content:center;
flex-direction: row;
flex-wrap: wrap;
list-style: none;
padding: 0;
margin: 0;
`;


const ListItem = styled.li`
margin: 0px;
`;