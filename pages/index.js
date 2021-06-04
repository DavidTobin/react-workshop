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

        <div className={styles.grid}>
          <a href="/1_basic" className={styles.card}>
            <h2>Class components vs functional</h2>
            <p>Why have functional components replaced class components?</p>
          </a>

          <a href="/useState" className={styles.card}>
            <h2>useState</h2>
            <p>What is useState and when to use it?</p>
          </a>

          <a href="/useEffect" className={styles.card}>
            <h2>useEffect</h2>
            <p>What is useEffect and when to use it?</p>
          </a>

          <a href="/useCallback" className={styles.card}>
            <h2>useCallback</h2>
            <p>What is useCallback and why is it necessary?</p>
          </a>

          <a
            href="/useContext"
            className={styles.card}
          >
            <h2>useContext</h2>
            <p>What is useContext and when to use it.</p>
          </a>

          <a
            href="/useReducer"
            className={styles.card}
          >
            <h2>useReducer</h2>
            <p>
              How you can use the useReducer hook to structure a complex app.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
