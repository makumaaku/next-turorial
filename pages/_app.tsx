import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme,blogTheme } from "../src/logic/styles";
import { useRouter } from "next/router";
import "highlight.js/styles/github-gist.css";
import { usePageView, GoogleAnalytics } from "src/lib/gtag";

const siteTitle = "ファーストアップ";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  usePageView(router);
  const isPost = router.route.includes("/posts/");
  const siteTheme = isPost ? blogTheme : theme;

  return (
    <ThemeProvider theme={siteTheme}>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mobile-phone_1f4f1.png"
        />
        {/* Google Analytics */}
        <GoogleAnalytics />
      </Head>

      
        <main>
          <Component {...pageProps} />
        </main>
   
    </ThemeProvider>
  );
}