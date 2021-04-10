import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from '../components/organizms/footer'

const name = 'ページの名前'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.headerTop}>
        <Link href="/">
          <a>
            <p className={styles.headerTopTitle}> ファーストアップ</p>
          </a>
        </Link>

        <div className={styles.headerTopItems}>
          <Link href="/hp/app-list">
            <a>
              <p className={styles.headerTopItem}> 制作アプリ一覧</p>
            </a>
          </Link>
          <Link href="/posts/">
            <a>
              <p className={styles.headerTopItem}>ブログ</p>
            </a>
          </Link>
          <Link href="/hp/contact-us">
            <a>
              <p className={styles.headerTopItem}> お問い合わせ</p>
            </a>
          </Link>
        </div>

      </div>
      <header className={styles.headerBottom}>
        {home && (
          <>
            <Image
              priority
              src="/images/img_home.png"
              height={600}
              width={1600}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main className={styles.children}>{children}</main>
      <Footer />
    </div>
  )
}