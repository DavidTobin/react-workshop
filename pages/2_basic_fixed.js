import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import hljs from 'highlight.js';

function ItemsAdder() {
  const [items, setItems] = useState([]);

  const addItem = () => setItems([`Item ${Math.random()} added`].concat(items));

  return (
    <div>
      <button onClick={addItem}>Add item</button>

      <div className={styles.overflowItems}>
        {items.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default function BasicFixed() {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [codeRef]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Functional components vs class</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Functional components vs class
        </h1>

        <p>
          This updated version is much easier to reason about. Visually the code looks much simpler. We've also gotten rid of any use of <i>this </i>
          which will allow us to avoid any scope related issues. We can now think of React components as simple functions.
        </p>

        <p>
          Here we also demonstrate the most commonly used hook, useState. On first render, useState will use whatever value is first passed into it, here it is <code>[]</code>.
          This function will then return an array with two values. The first value is the current value for our state. The second value is a function that when called will allow us to
          set the value of our state. This value is maintained throughout subsequent renders and will only change once <code>setItems</code> is called again.
        </p>

        <pre className={styles.code}>
          <code ref={codeRef}>
            {`
              function ItemsAdder() {
                const [items, setItems] = useState([]);

                const addItem = () => setItems([\`Item \${Math.random()} added\`].concat(items));

                return (
                  <div>
                    <button onClick={addItem}>Add item</button>

                    <div className={styles.overflowItems}>
                      {items.map(item => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                )
              }
            `}
          </code>
        </pre>

        <ItemsAdder />


        <p><a href="/3_props">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}

