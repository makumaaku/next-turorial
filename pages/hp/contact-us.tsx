import Head from 'next/head'
import Layout from '../../components/layout'

export default function CoutactUsPage({
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
          <title>お問い合わせ</title>
        </Head>
        <h1>お問い合わせページ</h1>
      </Layout>
    )
  }