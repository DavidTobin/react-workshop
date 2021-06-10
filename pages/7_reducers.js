import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';

function TodoAdder({ onChangeTodo, onAddTodo, addTodoText }) {
  return (
    <>
      <input type="text" onChange={onChangeTodo} value={addTodoText} />
      <button onClick={onAddTodo}>Add</button>
    </>
  );
}

function TodoList({ todos }) {
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
          So far we've been building our Todo app as a single component. All state management occurs in the same function and different features
          are intermingled together. In reality, our apps are going to be much larger and much more complex. Let's see how we can use the reducers with
          the <code>useReducer</code> hook to build the Todo app.
        </p>

        <p>
          As a first step, we're going to build our app using "dumb" components only. A dumb component is also called a presentational component. It won't manage
          any state and is only used to present a view to the user. Dumb components will typically only contain props and return some JSX. We've split our code up into
          three components. <code>{"<TodoApp />"}</code> will be used to hold our state and actions. <code>{"<TodoAdder />"}</code> will allow us to add new items to our todo
          list. Finally, <code>{"<TodoList />"}</code> will be used to display our todo list.
        </p>

        <pre className={styles.code}>
          {`
            function TodoAdder({ onChangeTodo, onAddTodo, addTodoText }) {
              return (
                <>
                  <input type="text" onChange={onChangeTodo} value={addTodoText} />
                  <button onClick={onAddTodo}>Add</button>
                </>
              );
            }

            function TodoList({ todos }) {
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
        </pre>

        <TodoApp />

        <p><a href="/8_useReducer">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}



