import React from "react";
import Head from "next/head";
import Layout from "../../src/components/layout";
import ProfileImage from "../../src/components/molecules/image/profileImage";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>プロフィール</title>
      </Head>
      <h1>プロフィール</h1>
      <ProfileImage />
      <p>Maaku Saito</p>
      <p>Flutterでアプリ開発をしています</p>
    </Layout>
  );
}
