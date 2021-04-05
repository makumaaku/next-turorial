import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../../lib/posts'

export default function Blog({ allPostsData }: {
    allPostsData: {
        date: string
        title: string
        imageUrl: string
        id: string
    }[]
}
) {
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
                            <Image
                                priority
                                src={imageUrl}
                                height={150}
                                width={250}

                            />
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