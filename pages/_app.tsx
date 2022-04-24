import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "../src/logic/styles";
import styled from "@emotion/styled";
import "highlight.js/styles/github-gist.css";
import { usePageView, GoogleAnalytics } from "src/lib/gtag";

const siteTitle = "ファーストアップ";

export default function App({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mobile-phone_1f4f1.png"
        />
        {/* Google Analytics */}
        <GoogleAnalytics />
      </Head>

      <Container>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  ··display: flex;
  ··flex-direction: column;
  ··align-items: center;
`;
