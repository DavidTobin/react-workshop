import React, { useReducer, useCallback } from 'react';
import todoReducer, { initialState, actions } from './reducer';
import styles from '../../styles/Home.module.css';
import TodoAdder from './components/todo_adder';
import TodoList from './components/todo_list';

export default function TodoApp({ reducer = todoReducer }) {
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
