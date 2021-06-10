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
          Let's now add some state management to our "dumb" app using <code>useReducer</code>. We can think of a reducer as a database of the state for our app.
          Our reducer is a function that takes <code>state</code> and <code>action</code> as arguments. State represents the current state of our app. When we dispatch
          an action, that will be passed as the second argument to our reducer. Acting on whichever action is passed, we should then return an updated copy of our state.
        </p>

        <p>
          Our reducer and some initial state is then passed to the <code>useReducer</code> hook. This will return us a copy of the current state and a dispatch function. The
          dispatch function allows us to pass actions to the reducer.
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
          `}
        </pre>

        <TodoApp />

        <p><a href="/9_exercise_1">Next</a></p>
      </main>

      <Footer />
    </div>
  )
}



