import React from 'react';

import { useSelector } from 'react-redux';
import styles from './Home.module.css';
import CreateTodoForm from '../../components/create-todo/CreateTodoForm';
import TodoItem from '../../components/todo-item/TodoItem';

const HomePage = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.formWrapper}>
          <CreateTodoForm />
        </div>

        <div className={styles.todos}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
