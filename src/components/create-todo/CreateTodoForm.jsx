import React, { useRef } from 'react';
import styles from './CreateTodo.module.css';
import { useActions } from '../../hooks/useActions';

const CreateTodoForm = () => {
  const { addTodo } = useActions();

  const title = useRef();
  const image = useRef();
  const date = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitted');

    console.log(date.current.value);
    addTodo({
      id: Math.random(0, 100).toFixed(2),
      title: title.current.value,
      // image: image.current.value,
      date: new Date(date.current.value),
    });

    title.current.value = '';
    // image.current.value = '';
    date.current.value = '';
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" ref={title} required placeholder="Title..." />
      {/* <input type="text" ref={image} required placeholder="Image..." /> */}
      <input type="date" ref={date} required placeholder="Date..." />

      <button>Create</button>
    </form>
  );
};

export default CreateTodoForm;
