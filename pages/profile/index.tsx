import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../src/components/layout";
import ProfileImage from "../../src/components/molecules/image/profileImage";
import mountains from "../../public/images/profile.jpg";

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
      <Image
        alt="プロフィール画像"
        src={mountains}
        height={300}
        width={300}
        layout="fill"
        // objectFit="fill"
        quality={100}
      />
      <Image
        alt="Mountains2"
        src="/blog1.webp"
        height={300}
        width={300}
        // layout="fill"
        // objectFit="fill"
        quality={100}
      />
    </Layout>
  );
}
