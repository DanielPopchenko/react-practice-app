import React from 'react';
import styles from './Home.module.css';
import CreateTodoForm from '../../components/create-todo/CreateTodoForm';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Just do todo!</h1>

      <CreateTodoForm />
    </div>
  );
};

export default HomePage;
