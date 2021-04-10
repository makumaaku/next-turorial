import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/page/blog.module.css'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../../lib/posts'

export default function Blog({ allPostsData }: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}
) {
    return (
        <Layout>
            <Head>
                <title>ブログ</title>
            </Head>

            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>

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