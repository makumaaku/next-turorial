import React from "react";
import BlogCard from "./blog-card";
import { PostData } from "../../../models/PostData";
import styled from "@emotion/styled";

export default function BlogArea({
  allPostsData,
  isPost = true,
}: {
  allPostsData: PostData[];
  isPost: boolean;
}) {
  const title = isPost ? "ブログ" : "プライバシーポリシー";
  return (
    <div>
      <H2>{title}</H2>
      <List>
        {allPostsData.map(({ id, date, title, imageUrl }) => (
          <ListItem key={id}>
            <BlogCard
              imageUrl={imageUrl}
              pass={isPost ? `/posts/${id}` : `/privacy-policy/${id}`}
              title={title}
              dateString={date}
              isPost={isPost}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const H2 = styled.h2`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0px;
`;
