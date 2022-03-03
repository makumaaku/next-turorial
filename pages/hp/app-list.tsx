import React from "react";
import Head from "next/head";
import Layout from "../../src/components/layout";
import AppArea from "../../src/components/organizms/appList/app_area";

export default function AppListPage() {
  return (
    <Layout>
      <Head>
        <title>制作アプリ一覧</title>
      </Head>
      <AppArea />
    </Layout>
  );
}
