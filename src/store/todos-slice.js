import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    quantity: 0,
  },
  reducers: {
    addTodo: ({ state, action }) => {
      const newItem = action.payload;
      state.
    },
  },
});
