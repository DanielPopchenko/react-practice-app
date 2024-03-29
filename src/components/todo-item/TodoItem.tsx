import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { useActions } from '../../hooks/useActions';
import SelectElement from '../../ui/SelectElement';

const TodoItem = ({ todo }) => {
  const { title, image, date, id } = todo;

  const [isEditing, setIsEditing] = useState(false);

  const finishTodoDate = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  console.log(finishTodoDate);

  const { removeTodo } = useActions();
  return (
    <div className={styles.item}>
      <div className="date">
        {finishTodoDate.day}
        <br />
        {finishTodoDate.month}
        <br />
        {finishTodoDate.year}
      </div>
      <div className="description">
        <h2>{title}</h2>
        {/* <img src={image} alt={name} /> */}
        {/* <p>Finish date: {finishTodoDatwe}</p> */}
        <button onClick={() => removeTodo(id)}>Delete todo</button>
      </div>
      <div className={styles.controls}>
        <SelectElement value={isEditing} setValue={setIsEditing} />
      </div>
    </div>
  );
};

export default TodoItem;
