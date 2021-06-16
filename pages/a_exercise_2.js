import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import TodoApp from '../exercises/clear_all';

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
          Add a new component which will contain a button which will allow us to clear all todos from our list.
        </p>

        <TodoApp />

        <p><a href="/b_exercise_3">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}





