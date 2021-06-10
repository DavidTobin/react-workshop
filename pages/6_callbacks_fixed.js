import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';

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
  const [addTodoText, setAddTodoText] = useState('');

  useEffect(async () => {
    const t = await fetchTodos();

    setTodos(t);
  }, []);

  useEffect(() => {
    document.title = `${todos.length} remaining todo items`
  }, [todos]);

  const onAddTodo = useCallback(() => {
    setTodos([{
      name: addTodoText,
      done: false,
    }].concat(todos))
  }, [todos, addTodoText]);

  const onChangeTodo = useCallback(e => setAddTodoText(e.target.value), []);

  return (
    <div className={styles.todoContainer}>
      <h1>My Todo List</h1>

      <input type="text" onChange={onChangeTodo} value={addTodoText} />
      <button onClick={onAddTodo}>Add</button>
      {todos.map(todo => (
        <div className={styles.todo} key={todo.name}>
          <input type="checkbox" checked={todo.done} readOnly />
          {todo.name}
        </div>
      ))}
    </div>
  )
}

export default function Callbacks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Callbacks</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Callbacks
        </h1>

        <p>
          The issue is not as easy to spot but leads to unnecessary memory being allocated. Every time we re-render, we are recreating the
          <code>onChangeTodo</code> and <code>onAddTodo</code> methods. By using the <code>useCallback</code> hook we can cache a single instance of these methods.
          Like the <code>useEffect</code> hook, the second argument passed to the hook will allow us to set it's dependencies. We will only recreate the method when we need to.
        </p>

        <pre className={styles.code}>
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

              const onAddTodo = useCallback(() => {
                setTodos([{
                  name: addTodoText,
                  done: false,
                }].concat(todos))
              }, [todos, addTodoText]);

              const onChangeTodo = useCallback(e => setAddTodoText(e.target.value), []);

              return (
                <div className={styles.todoContainer}>
                  <h1>My Todo List</h1>

                  <input type="text" onChange={onChangeTodo} value={addTodoText} />
                  <button onClick={onAddTodo}>Add</button>

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
        </pre>

        <TodoApp />

        <p><a href="/7_reducers">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}



