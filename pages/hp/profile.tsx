import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/page/profile.module.css'

export default function AppListPage(
) {
    return (
        <Layout>
            <Head>
                <title>プロフィール</title>
            </Head>
            <div className={styles.container}>
                <h1>プロフィール</h1>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                />

            </div>

        </Layout>
    )
}