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

function TodoAdder({ onChangeTodo, onAddTodo, addTodoText }) {
  return (
    <>
      <input type="text" onChange={onChangeTodo} value={addTodoText} />
      <button onClick={onAddTodo}>Add</button>
    </>
  );
}

function TodoList({ todos, onTodosChange }) {
  onTodosChange();

  return (
    <>
      {todos.map(todo => (
        <div className={styles.todo} key={todo.name}>
          <input type="checkbox" checked={todo.done} readOnly />
          {todo.name}
        </div>
      ))}
    </>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [addTodoText, setAddTodoText] = useState('');

  useEffect(async () => {
    const t = await fetchTodos();

    setTodos(t);
  }, []);

  const onAddTodo = () => {
    setTodos([{
      name: addTodoText,
      done: false,
    }].concat(todos))
  };

  const onChangeTodo = e => setAddTodoText(e.target.value);
  const onTodosChange = () => console.log('Todos change', todos);

  return (
    <div className={styles.todoContainer}>
      <h1>My Todo List</h1>

      <TodoAdder onChangeTodo={onChangeTodo} onAddTodo={onAddTodo} addTodoText={addTodoText} />
      <TodoList todos={todos} onTodosChange={onTodosChange} />
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
          Let's now take a look at the <code>useCallback</code> hook. Take a look at the following example,
          we've split our Todo app into multiple components. Our <code>{'<TodoAdder />'}</code> component
          will handle adding new todo items to our state. Our <code>{'<TodoList />'}</code> component will then render these components. Can you spot
          the problem with this code?
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

              function TodoAdder({ onChangeTodo, onAddTodo, addTodoText }) {
                return (
                  <>
                    <input type="text" onChange={onChangeTodo} value={addTodoText} />
                    <button onClick={onAddTodo}>Add</button>
                  </>
                );
              }

              function TodoList({ todos, onTodosChange }) {
                onTodosChange();

                return (
                  <>
                    {todos.map(todo => (
                      <div className={styles.todo} key={todo.name}>
                        <input type="checkbox" checked={todo.done} readOnly />
                        {todo.name}
                      </div>
                    ))}
                  </>
                );
              }

              function TodoApp() {
                const [todos, setTodos] = useState([]);
                const [addTodoText, setAddTodoText] = useState('');

                useEffect(async () => {
                  const t = await fetchTodos();

                  setTodos(t);
                }, []);

                const onAddTodo = () => {
                  setTodos([{
                    name: addTodoText,
                    done: false,
                  }].concat(todos))
                };

                const onChangeTodo = e => setAddTodoText(e.target.value);
                const onTodosChange = () => console.log('Todos change', todos);

                return (
                  <div className={styles.todoContainer}>
                    <h1>My Todo List</h1>

                    <TodoAdder onChangeTodo={onChangeTodo} onAddTodo={onAddTodo} addTodoText={addTodoText} />
                    <TodoList todos={todos} onTodosChange={onTodosChange} />
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



