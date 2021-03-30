import Head from 'next/head'
import Layout from '../../components/layout'

export default function Post({
    postData
  }: {
    postData: {
      title: string
      date: string
      contentHtml: string
    }
  }) {
    return (
      <Layout>
        <Head>
          <title>ホームページのトップ</title>
        </Head>
        <h1>HP練習</h1>
      </Layout>
    )
  }