import React, { useEffect, useRef } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import hljs from 'highlight.js';

class ItemsAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  addItem() {
    this.setState({
      items: this.state.items.concat([`Item ${Math.random()} added`])
    });
  }

  render() {
    const items = this.state.items;

    return (
      <div>
        <button onClick={this.addItem}>Add item</button>

        <div className={styles.overflowItems}>
          {items.map(item => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default function Basic() {
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
          React has recently shifted over to advising functional components over class components.
          This is because of many inherent problems that you'll encounter using classes over functions. Take the following example,
           can you spot the issue?
        </p>

        <pre className={styles.code}>
          <code ref={codeRef}>
          {`
            class ItemsAdder extends React.Component {
              constructor(props) {
                super(props);

                this.state = {
                  items: []
                }
              }

              addItem() {
                this.setState({
                  items: this.state.items.concat([\`Item \${Math.random()} added\`])
                });
              }

              render() {
                const items = this.state.items;

                return (
                  <div className={styles.overflowItems}>
                    <button onClick={this.addItem}>Add item</button>

                    {items.map(item => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                )
              }
            }
          `}
          </code>
        </pre>

        <ItemsAdder />


        <p><a href="/2_basic_fixed">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}
