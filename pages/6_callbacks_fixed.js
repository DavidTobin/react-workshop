import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
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

const TodoList = memo(function TodoList({ todos, onTodosChange }) {
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
});

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [addTodoText, setAddTodoText] = useState('');

  useEffect(async () => {
    const t = await fetchTodos();

    setTodos(t);
  }, []);

  const onAddTodo = useCallback(() => {
    setTodos([{
      name: addTodoText,
      done: false,
    }].concat(todos))
  }, [addTodoText, todos]);

  const onChangeTodo = useCallback(e => setAddTodoText(e.target.value), []);
  const onTodosChange = useCallback(() => console.log('Todos change', todos), [todos]);

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
          One of the most expensive operations we can perform with React is re-rendering, it should be avoided where possible. In the previous example, each time
          we type some text into the addTodoText input box, we caused a re-render on <code>{'<TodoList />'}</code>. This is because we are re-creating the <code>onTodosChange</code>&nbsp;
          method each time <code>{'<TodoApp />'}</code> has any of it's state change. To fix this, we wrap our methods in a <code>useCallback</code> hook. This hook will cache each method
          rather than re-creating them on each render. We've also wrapped our <code>{'<TodoList />'}</code> component in a <code>React.memo()</code> call. This will tell the component that it should
          only re-render once any of it's props change.
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

              const TodoList = memo(function TodoList({ todos, onTodosChange }) {
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
              });

              function TodoApp() {
                const [todos, setTodos] = useState([]);
                const [addTodoText, setAddTodoText] = useState('');

                useEffect(async () => {
                  const t = await fetchTodos();

                  setTodos(t);
                }, []);

                const onAddTodo = useCallback(() => {
                  setTodos([{
                    name: addTodoText,
                    done: false,
                  }].concat(todos))
                }, [addTodoText, todos]);

                const onChangeTodo = useCallback(e => setAddTodoText(e.target.value), []);
                const onTodosChange = useCallback(() => console.log('Todos change', todos), [todos]);

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

        <p><a href="/7_reducers">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}



