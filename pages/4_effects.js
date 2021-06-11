import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import hljs from 'highlight.js';

async function fetchTodos() {
  const res = await fetch('/api/todos');

  if (res.ok) {
    const json = await res.json();

    return json.todos;
  } else {
    return [];
  }
}

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const t = await fetchTodos();

    setTodos(t);
  }, []);

  useEffect(() => {
    document.title = `${todos.length} remaining todo items`
  }, [todos]);

  return (
    <div className={styles.todoContainer}>
      <h1>My Todo List</h1>
      {todos.map(todo => (
        <div className={styles.todo} key={todo.name}>
          <input type="checkbox" checked={todo.done} readOnly />
          {todo.name}
        </div>
      ))}
    </div>
  )
}

export default function Effects() {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [codeRef]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Effects</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Side Effects
        </h1>

        <p>
          The second hook we'll look at is the <code>useEffect</code> hook. This allows you to perform side effects within your components.
          Side effects are any change to application state observable outside a function.
          An example of a side effect would be making a network request or changing the title of the browser.
        </p>

        <p>
          The second argument passed to <code>useEffect</code> will tell the hook whether or not the effect should run on subsequent renders.
          For our network request effect, we pass <code>[]</code> as we only want this to run once. The values inside <code>[]</code> will never change.
          The title update effect will only run once our <code>todos</code> value changes.
        </p>

        <pre className={styles.code}>
          <code ref={codeRef}>
            {`
              async function fetchTodos() {
                const res = await fetch('/api/todos');

                if (res.ok) {
                  const json = await res.json();

                  return json.todos;
                } else {
                  return [];
                }
              }

              function TodoApp() {
                const [todos, setTodos] = useState([]);

                // Network request side effect
                useEffect(async () => {
                  const t = await fetchTodos();

                  setTodos(t);
                }, []);

                // Page title update side effect
                useEffect(() => {
                  document.title = \`\${todos.length} remaining todo items\`
                }, [todos]);

                return (
                  <div className={styles.todoContainer}>
                    <h1>My Todo List</h1>
                    {todos.map(todo => (
                      <div className={styles.todo} key={todo.name}>
                        <input type="checkbox" checked={todo.done} readOnly />
                        {todo.name}
                      </div>
                    ))}
                  </div>
                )
              }

              <TodoApp />
            `}
          </code>
        </pre>

        <TodoApp />

        <p><a href="/5_callbacks">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}


