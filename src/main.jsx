import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './reset.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './pages/home/HomePage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import ErrorPage from './pages/error/ErrorPage.jsx';
import { store } from './store/store.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
);
