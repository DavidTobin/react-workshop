import React, { useRef, useEffect, memo } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import hljs from 'highlight.js';

const TodoAdder = memo(function TodoAdder({ onChangeTodo, onAddTodo, addTodoText }) {
  return (
    <>
      <input type="text" onChange={onChangeTodo} value={addTodoText} />
      <button onClick={onAddTodo}>Add</button>
    </>
  );
});

const TodoList = memo(function TodoList({ todos }) {
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
  const todos = [{ name: 'React workshop', done: false }, { name: 'On-call', done: true }];
  const onAddTodo = () => {};
  const onChangeTodo = () => {};

  return (
    <div className={styles.todoContainer}>
      <h1>My Todo List</h1>

      <TodoAdder onAddTodo={onAddTodo} onChangeTodo={onChangeTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default function Reducers() {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [codeRef]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Reducers</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Reducers
        </h1>

        <p>
          Let's see how we can use reducers with the <code>useReducer</code> hook to structure a more complex application.
        </p>

        <p>
          As a first step, we're going to build our app using "dumb" components only. A dumb component is also called a presentational component. It won't manage
          any state and is only used to present a view to the user. Dumb components will typically only contain props and return some JSX. We've split our code up into
          three components. <code>{"<TodoApp />"}</code> will be used to hold our state and actions. <code>{"<TodoAdder />"}</code> will allow us to add new items to our todo
          list. Finally, <code>{"<TodoList />"}</code> will be used to display our todo list. Splitting our code up this way initially is generally a good idea as it is much easier
          to write tests for "dumb" components.
        </p>

        <pre className={styles.code}>
          <code ref={codeRef}>
            {`
              const TodoAdder = memo(function TodoAdder({ onChangeTodo, onAddTodo, addTodoText }) {
                return (
                  <>
                    <input type="text" onChange={onChangeTodo} value={addTodoText} />
                    <button onClick={onAddTodo}>Add</button>
                  </>
                );
              });

              const TodoList = memo(function TodoList({ todos }) {
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
                const todos = [{ name: 'React workshop', done: false }, { name: 'On-call', done: true }];
                const onAddTodo = () => {};
                const onChangeTodo = () => {};

                return (
                  <div className={styles.todoContainer}>
                    <h1>My Todo List</h1>

                    <TodoAdder onAddTodo={onAddTodo} onChangeTodo={onChangeTodo} />
                    <TodoList todos={todos} />
                  </div>
                )
              }
            `}
          </code>
        </pre>

        <TodoApp />

        <p><a href="/8_useReducer">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}



