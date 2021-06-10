import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Workshop</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          React Workshop
        </h1>

        <ul style={{ listStyleType: 'none' }}>
          <li className={styles.card}><a href="/1_basic">Functional vs Class Components</a></li>
          <li className={styles.card}><a href="/3_props">Props</a></li>
          <li className={styles.card}><a href="/4_effects">Side Effects</a></li>
          <li className={styles.card}><a href="/5_callbacks">Callbacks</a></li>
          <li className={styles.card}><a href="/7_reducers">Reducers</a></li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
