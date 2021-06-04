import Head from 'next/head'
import styles from './styles.module.scss'

export default function Bye() {
  return (
    <>
      <Head>
        <title>Elsys | See you later </title>
      </Head>

      <main className={styles.containerFinalSession}>
        <img src='/images/my-hero-logo.png' alt='My Hero Academia Logo' />
        <h1 className={styles.textFinalSession}>See You Next Time, bye... 🦸🏻‍♂️</h1>
      </main>
    </>
  )
}