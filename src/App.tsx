import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
