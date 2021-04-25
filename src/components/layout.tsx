import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled"
import Header from "./organizms/top/header";
import Footer from "./organizms/top/footer";


export const siteTitle = "ファーストアップ";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <header>
        {home && (
          <>
            {/* <Image
              priority
              src="/images/img_home.png"
              height={600}
              width={1600}
              alt={'トップページの画像'}
            /> */}
          </>
        )}
      </header>
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
}

/* min-heightを指定して、Footerが一番下にくるように */
const Container = styled.div`
min-height: 80vh;
// max-width: 80%;
// display: flex;
// align-items:center;
// justify-content:center;
// background:yellow;
`
