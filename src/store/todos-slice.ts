import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../types/todos.types';

const initialState: ITodo[] = [];

// TODO: to work on a design, authentication

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const todo: ITodo = action.payload;
      console.log(todo);
      state.push(todo);
    },

    removeTodo(state, action) {
      const todoId = action.payload;
      const elementIdx = state.findIndex((todo) => todo.id === todoId);

      state.filter((todo) => todo.id !== todoId);
      state.splice(elementIdx, 1);
    },
  },
});

export const { actions, reducer } = todoSlice;
