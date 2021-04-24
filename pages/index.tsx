import Head from 'next/head'
import Layout, { siteTitle } from '../src/components/layout'
import utilStyles from '../src/styles/utils.module.css'
import styles from '../src/styles/page/top.module.css'
import { getSortedPostsData } from '../src/lib/posts'
import { GetStaticProps } from 'next'
import AppCard from '../src/components/organizms/app_card'
import BlogCard from '../src/components/organizms/blog-card'
import { PostData } from '../src/models/PostData'
import { AppList } from '../src/lib/dev-apps'


export default function Home({
  allPostsData
}: {
  allPostsData: PostData[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className = {styles.body}>

     
      <div >
        <h2 className={utilStyles.headingLg}>アプリ一覧</h2>
        <ul className={utilStyles.list}>
          {AppList.map(({ name, imageUrl, linkUrl }) => (
            <li className={utilStyles.listItem}>
              <AppCard appName={name} imageUrl={imageUrl} linkUrl={linkUrl} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, imageUrl }) => (
            <li className={utilStyles.listItem} key={id}>
              <BlogCard imageUrl={imageUrl} pass={`/posts/${id}`} title={title} dateString={date} />
            </li>
          ))}
        </ul>

      </div>
      </div>
      <div>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </div>
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