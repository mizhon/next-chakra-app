import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const TopNavBarWithNoSSR = dynamic(import('../components/TopNavBar'), {
  ssr: false
})

export default function Home() {
  return (
    <>
      {/* 设置页面的tab标签信息 */}
      <Head>
        <title>MY NEXT APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavBarWithNoSSR />
      <div className={styles.container}>
        <main className={styles.main}>
        </main>
      </div>
    </>
  )
}
