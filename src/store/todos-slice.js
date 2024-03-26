import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// TODO: to work on a design, authentication

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const todo = action.payload;
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
