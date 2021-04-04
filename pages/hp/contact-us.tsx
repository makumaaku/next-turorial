import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/page/contact-us.module.css'


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
        <div className={styles.container}>
        <h1 >お問い合わせ</h1>
        <form action="">
          <p>お名前</p>
          <input type="text" name="name" size={50}></input>
          <p>メールアドレス</p>
          <input type="text" name="name" size={50}></input>
          <p>内容</p>
          <textarea name="" id="" cols={50} rows={10}></textarea>
        </form>
        <button type="submit">送信</button>
        </div>
      </Layout>
    )
  }