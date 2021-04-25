import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "theme-ui"
import { IoMdSunny } from "react-icons/io"
import { useToggleColorMode } from '../../../logic/styles'
import styled from "@emotion/styled"

//faChevronRightなど、Font Awesomeのhtmlのクラス名をcamelCaseに変更すればOK

export default function Header() {

  const toggleColorMode = useToggleColorMode()

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
          <HeaderItem>
            制作アプリ一覧
              </HeaderItem>
        </Link>


        <Link href="/posts/">
          <HeaderItem>
            ブログ
              </HeaderItem>
        </Link>


        <Link href="/hp/contact-us">
          <HeaderItem>
            お問い合わせ
              </HeaderItem>
        </Link>

      </HeaderItems>
      {/* <button
        onClick={() => console.log("aaaaaaaaa")}
        className={styles.headerMenu}
      >
        <FontAwesomeIcon icon={faBars} color="white" size="sm" />
      </button> */}
      {/* <IconButton aria-label="Toggle Dark Mode" onClick={toggleColorMode}>
        <IoMdSunny size={28} />
      </IconButton> */}

    </Container>
  );
}


const Container = styled.div`
min-width:100vw;
display: flex;
flex-direction: row;
background-color: black;
justify-content: space-between;
`

const HeaderTitle = styled.div`
display:flex;
align-items: center;
`

const Title = styled.h1`
font-size: 20px;
font-weight: 700;
color: white;
`

const HeaderItems = styled.div`
display:flex;
align-items: center;
`

const HeaderMenu = styled.div`
align-items: stretch;
background-color: red;
`


const HeaderItem = styled.a`
padding: 0px 20px;
font-size: 16px;
font-weight: 500;
color: white;
cursor : pointer;
&:hover {
  color: green;
}
`
