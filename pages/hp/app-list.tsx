import Head from 'next/head'
import Layout from '../../src/components/layout'
import styles from '../../src/styles/page/app-list.module.css'
import AppCard from '../../src/components/organizms/app_card'

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
                <AppCard imageUrl={"/app_icons/ic_body_records.webp"} linkUrl={"https://apps.apple.com/us/app/bodyrecords/id1511365313?itscg=30200&amp;itsct=apps_box"} appName={"BodyRecords"} />
                <AppCard imageUrl={"/app_icons/ic_salary_record.webp"} linkUrl={"https://apps.apple.com/us/app/%E6%9C%88%E5%8F%8E%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC-salaryrecord/id1516029759?itsct=apps_box&itscg=30200"} appName={"月収チェッカー"} />
                <AppCard imageUrl={"/app_icons/ic_seeing.webp"} linkUrl={"https://apps.apple.com/us/app/seeing/id1528508306?itsct=apps_box&itscg=30200"} appName={"Seeing"} />
                <AppCard imageUrl={"/app_icons/ic_bench_press_score.webp"} linkUrl={"https://apps.apple.com/us/app/%E5%85%A8%E5%9B%BD%E3%83%99%E3%83%B3%E3%83%81%E3%83%97%E3%83%AC%E3%82%B9%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0/id1536147597?itsct=apps_box&itscg=30200"} appName={"全国ベンチプレスランキング"} />
                {/* <AppCard imageUrl={"/app_icons/ic_phrase_book.webp"} linkUrl={"https://apps.apple.com/us/app/bodyrecords/id1511365313?itscg=30200&amp;itsct=apps_box"} appName={"フレーズブック"} /> */}
                </li>
            </div>
        </Layout>
    )
}


{/* <a href="https://apps.apple.com/us/app/bodyrecords/id1511365313?itscg=30200&amp;itsct=apps_box" style="width: 170px; height: 170px; border-radius: 22%; overflow: hidden; display: inline-block; vertical-align: middle;"><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/46/1d/7e461db7-f6a7-4d03-c82c-ffc8436029b6/AppIcon-1x_U007emarketing-0-7-0-85-220.png/540x540bb.jpg&h=2705869b0f8b15333ff2bf9ce843e7f3" alt="BodyRecords" style="width: 170px; height: 170px; border-radius: 22%; overflow: hidden; display: inline-block; vertical-align: middle;"></a> */ }