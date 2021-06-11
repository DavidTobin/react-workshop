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
  const [addTodoText, setAddTodoText] = useState('');

  useEffect(async () => {
    const t = await fetchTodos();

    setTodos(t);
  }, []);

  useEffect(() => {
    document.title = `${todos.length} remaining todo items`
  }, [todos]);

  const onAddTodo = () => {
    setTodos([{
      name: addTodoText,
      done: false,
    }].concat(todos))
  };

  const onChangeTodo = e => setAddTodoText(e.target.value);

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
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [codeRef]);

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
          Let's add the ability to add our own todos to the list. To do so we need to add two methods that are called, one when we click the "Add" button and one when we change text inside the
          input. Can you spot the problem?
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
                const [addTodoText, setAddTodoText] = useState('');

                // Network request side effect
                useEffect(async () => {
                  const t = await fetchTodos();

                  setTodos(t);
                }, []);

                // Page title update side effect
                useEffect(() => {
                  document.title = \`\${todos.length} remaining todo items\`
                }, [todos]);

                const onAddTodo = () => {
                  setTodos([{
                    name: addTodoText,
                    done: false,
                  }].concat(todos))
                };

                const onChangeTodo = e => setAddTodoText(e.target.value)

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
          </code>
        </pre>

        <TodoApp />

        <p><a href="/6_callbacks_fixed">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}



