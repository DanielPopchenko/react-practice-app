import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as todoReducer } from './todos-slice';

const reducers = combineReducers({
  // ! this name then will be called as a property on a state obj
  todos: todoReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
