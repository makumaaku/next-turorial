import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import Header from '../components/organizms/header'
import Footer from './organizms/footer'


export const siteTitle = 'ファーストアップ'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
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
      <Header />
      <header>
        {home && (
          <>
            <Image
              priority
              src="/images/img_home.png"
              height={600}
              width={1600}
              alt={'トップページの画像'}
            />
          </>
        )}
      </header>
      <main className={styles.children}>{children}</main>
      <Footer />
    </div>
  )
}