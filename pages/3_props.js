import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import hljs from 'highlight.js';

function ItemsAdder({ isDisabled, initialItems }) {
  const [items, setItems] = useState(initialItems || []);

  const addItem = () => setItems([`Item ${Math.random()} added`].concat(items));

  return (
    <div>
      <button disabled={isDisabled} onClick={addItem}>Add item</button>

      <div className={styles.overflowItems}>
        {items.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default function Props() {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [codeRef]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Props</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Props
        </h1>

        <p>
          Now that we view components as simple functions, we can think of props as arguments to these functions. One important property of props is that they are read-only. We should expect the exact
          same behaviour from the <code>isDisabled</code> prop here. It should always set the button to disbled and the component logic should never change it's value.
        </p>

        <pre className={styles.code}>
          <code ref={codeRef}>
            {`
              function ItemsAdder({ isDisabled, initialItems }) {
                const [items, setItems] = useState(initialItems || []);

                const addItem = () => setItems([\`Item \${Math.random()} added\`].concat(items));

                return (
                  <div>
                    <button disabled={isDisabled} onClick={addItem}>Add item</button>

                    <div className={styles.overflowItems}>
                      {items.map(item => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                )
              }

          <ItemsAdder isDisabled />
          <ItemsAdder initialItems={["Initial item 1", "Initial item 2"]} />
          <ItemsAdder />

            `}
          </code>
        </pre>

        <ItemsAdder isDisabled />
        <ItemsAdder initialItems={["Initial item 1", "Initial item 2"]} />
        <ItemsAdder />


        <p><a href="/4_effects">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}


