import React, { memo } from 'react';
import styles from '../../../styles/Home.module.css';

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

export default memo(TodoList);
