import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ProfileImage from "../../molecules/image/profileImage";
import YoutubeButton from "../../molecules/button/youtubeButton";
import TwitterButton from "../../molecules/button/twitterButton";

export default function ProfileArea() {
  const router = useRouter();
  return (
    <Container>
      <h3>プロフィール</h3>
      <ProfileImage />
      <Row>
        <P4>
          <YoutubeButton />
        </P4>
        <P4>
          <TwitterButton />
        </P4>
      </Row>
      <p>初めまして！ブログ初めてみました</p>
      <ProfileButton onClick={() => router.push("/profile")}>
        プロフィールはこちら
      </ProfileButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
`;

const ProfileButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  border-radius: 100vh;
  color: #fff;
  background: #eb6100;
  padding: 10px 20px;

  &:hover {
    background: #f56500;
  }
`;
const P4 = styled.div`
  padding: 4px;
`;
