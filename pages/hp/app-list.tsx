import Head from 'next/head'
import Layout from '../../src/components/layout'
import styles from '../../src/styles/page/app-list.module.css'
import utilStyles from '../../src/styles/utils.module.css'
import AppCard from '../../src/components/organizms/app_card'
import { AppList } from '../../src/lib/dev-apps'

export default function AppListPage(
) {
    return (
        <Layout>
            <Head>
                <title>制作アプリ一覧</title>
            </Head>
            <div className={styles.container}>
                <h1>アプリ一覧</h1>
                <li className={styles.appCardList}>
                    {AppList.map(({ name, imageUrl, linkUrl }) => (
                        <li className={utilStyles.listItem}>
                            <AppCard appName={name} imageUrl={imageUrl} linkUrl={linkUrl} />
                        </li>
                    ))}
                </li>
            </div>
        </Layout>
    )
}
