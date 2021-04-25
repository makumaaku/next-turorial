import { GetStaticProps } from "next";
import styled from "@emotion/styled"
import Layout from "../src/components/layout";
import { getSortedPostsData } from "../src/lib/posts";
import AppCard from "../src/components/organizms/app_card";
import BlogCard from "../src/components/organizms/blog-card";
import { PostData } from "../src/models/PostData";
import { AppList } from "../src/lib/dev-apps";



export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <Layout home>

      <Container>


        <H2>アプリ一覧</H2>
        <List>
          {AppList.map(({ name, imageUrl, linkUrl }) => (
            //idとかにしたい
            <ListItem key={name}>
              <AppCard appName={name} imageUrl={imageUrl} linkUrl={linkUrl} />
            </ListItem>
          ))}
        </List>


        <H2>BLOG</H2>
        <List>
          {allPostsData.map(({ id, date, title, imageUrl }) => (
            <ListItem key={id}>
              <BlogCard
                imageUrl={imageUrl}
                pass={`/posts/${id}`}
                title={title}
                dateString={date}
              />
            </ListItem>
          ))}
        </List>


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
align-items:center;
display: flex;
flex-direction: column;
margin:0px 30px;
background:grey;
`;

const H2 = styled.h2`
text-align:center;
text-decoration:underline black;
`;

const List = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
list-style: none;
padding: 0;
margin: 0;
`;


const ListItem = styled.li`
margin: 0px;
`;