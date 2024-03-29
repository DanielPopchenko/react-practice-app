import React from 'react';
import styles from './ErrorPage.module.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>An error occured!</h1>
        <p className={styles.containerText}>Please, try reloading the page!</p>
        <p>
          Or return to <Link to="/">Home page</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
