import React from "react";
import styled from "@emotion/styled";
import AppCard from "../../organizms/appList/app_card";
import { AppList } from "../../../lib/dev-apps";

export default function AppArea() {
  return (
    <div>
      <H2>アプリ一覧</H2>
      <List>
        {AppList.map(({ name, imageUrl, linkUrl }) => (
          //idとかにしたい
          <ListItem key={name}>
            <AppCard appName={name} imageUrl={imageUrl} linkUrl={linkUrl} />
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
