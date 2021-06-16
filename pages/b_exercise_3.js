import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import TodoApp from '../exercises/mark_done';

export default function Exercise() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exercise</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exercise
        </h1>

        <p>
          Add the ability to mark todos as done.
        </p>

        <TodoApp />

        <p><a href="/">Finish</a></p>
      </main>

      <Footer />
    </div>
  )
}






