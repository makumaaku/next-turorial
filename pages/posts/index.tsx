import Head from 'next/head'
import Layout, { siteTitle } from '../../src/components/layout'
import utilStyles from '../../src/styles/utils.module.css'
import { getSortedPostsData } from '../../src/lib/posts'
import BlogCard from '../../src/components/organizms/blog-card'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    imageUrl: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>ブログ</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, imageUrl }) => (
            <li className={utilStyles.listItem} key={id}>
              <BlogCard imageUrl={imageUrl} pass={`/posts/${id}`} title={title} dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}