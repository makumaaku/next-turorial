import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import styled from "@emotion/styled";

//faChevronRightなど、Font Awesomeのhtmlのクラス名をcamelCaseに変更すればOK

export default function Header() {
  // const toggleColorMode = useToggleColorMode()

  return (
    <Container>
      <HeaderTitle>
        <Link href="/">
          <a>
            <Title>ファーストアップ</Title>
          </a>
        </Link>
      </HeaderTitle>
      <HeaderItems>
        <Link href="/hp/app-list">
          <HeaderItem>アプリ一覧</HeaderItem>
        </Link>
        <Link href="/posts/">
          <HeaderItem>ブログ</HeaderItem>
        </Link>
        <Link href="/privacy-policy/">
          <HeaderItem>プライバシーポリシー</HeaderItem>
        </Link>
        <Link href="/hp/contact-us">
          <HeaderItem>お問い合わせ</HeaderItem>
        </Link>
        {/* <IconButton aria-label="Toggle Dark Mode" onClick={toggleColorMode}>
          <IoMdSunny size={28} color="white" />
        </IconButton> */}
      </HeaderItems>

      <MenuButton onClick={() => console.log("aaaaaaaaa")}>
        <HiMenu size={28} color="white" />
      </MenuButton>
    </Container>
  );
}

const Container = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
  padding: 10px 20px;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const HeaderItems = styled.button`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 767px) {
    display: none;
  }
`;

const HeaderItem = styled.a`
  padding: 0px 20px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-decoration: none;
  ::after {
    position: absolute;
    bottom: -24px;
    left: 0;
    content: "";
    width: 100%;
    height: 1.5px;
    background: #fff;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }
  &:hover::after {
    bottom: -8px;
    opacity: 1;
    visibility: visible;
  }
`;
