import React, { useRef } from 'react';
import styles from './CreateTodo.module.css';
import { useActions } from '../../hooks/useActions';
import { ITodo } from '../../types/todos.types';

const CreateTodoForm = () => {
  const { addTodo } = useActions();

  const title = useRef<HTMLInputElement>();
  const image = useRef<HTMLInputElement>();
  const date = useRef<HTMLInputElement>();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submitted');
    addTodo({
      id: Math.random().toFixed(2),
      title: title.current!.value,
      // image: image.current.value,
      date: new Date(date.current!.value),
    });

    title.current!.value = '';
    image.current!.value = '';
    date.current!.value = '';
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
