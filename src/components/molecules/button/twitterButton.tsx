import React from "react";
import { IconButton } from "theme-ui";
import { GrTwitter } from "react-icons/gr";
import styled from "@emotion/styled";

function TwitterButton() {
  return (
    <Container href={"https://twitter.com/marksaito4"}>
      <IconButton aria-label="Toggle Dark Mode">
        <GrTwitter size={28} color="white" />
      </IconButton>
    </Container>
  );
}

export default TwitterButton;

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #00acee;
`;
