import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/register">
            <a className={styles.card}><h3>Register &rarr;</h3></a>
          </Link>
          <Link href="/login">
            <a className={styles.card}><h3>Login &rarr;</h3></a>
          </Link>
          <Link href="/detail">
            <a className={styles.card}><h3>Detail &rarr;</h3></a>
          </Link>
        </div>
      </main>
    </div>
    )
}
