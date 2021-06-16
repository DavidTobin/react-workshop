import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import TodoApp from '../exercises/network';

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

        <p>Load in a list of todos from the <code>/api/todos</code> endpoint and display them in our todo list on page load.</p>

        <TodoApp />

        <p><a href="/a_exercise_2">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}
