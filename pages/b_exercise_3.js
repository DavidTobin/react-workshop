import React, { useReducer, useCallback } from 'react';
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

const initialState = {
  todos: [],
  addTodoText: ''
};

const actions = {
  ADD_TODO: 'ADD_TODO',
  CHANGE_TODO: 'CHANGE_TODO'
}

function todoReducer(state, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [{ name: state.addTodoText, done: false }].concat(state.todos),
        addTodoText: ''
      };

    case actions.CHANGE_TODO:
      return {
        ...state,
        addTodoText: action.value
      };
    default:
      return state;
  }
}

function TodoApp({ reducer = todoReducer }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onAddTodo = useCallback(() => dispatch({ type: actions.ADD_TODO }), []);
  const onChangeTodo = useCallback(e => dispatch({ type: actions.CHANGE_TODO, value: e.target.value }), []);

  return (
    <div className={styles.todoContainer}>
      <h1>My Todo List</h1>

      <TodoAdder addTodoText={state.addTodoText} onAddTodo={onAddTodo} onChangeTodo={onChangeTodo} />
      <TodoList todos={state.todos} />
    </div>
  )
}

export default function Exercise() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exercise</title>
        <meta name="description" content="React workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exercise
        </h1>

        <p>
          Add the ability to mark todos as done.
        </p>

        <TodoApp />

        <p><a href="/">Finish</a></p>
      </main>

      <Footer />
    </div>
  )
}






