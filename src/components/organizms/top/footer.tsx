import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Container>
      <Link href="/hp/contact-us">
        <ContactUsBtn>お問い合わせ</ContactUsBtn>
      </Link>
      <CopyRight>©︎ 2021 ファーストアップ</CopyRight>
    </Container>
  );
}

const Container = styled.div`
  min-width: 100vw;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  background-color: rgb(45, 43, 43);
  align-items: center;
`;

const ContactUsBtn = styled.a`
  height: 30px;
  width: 120px;
  color: white;
  background-color: black;
  border-radius: 30px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const CopyRight = styled.p`
  min-width: 100vw;
  background-color: black;
  margin-bottom: -10px;
  padding: 10px;
  font-size: 12px;
  color: white;
`;
