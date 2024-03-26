import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Todo App</h2>
      <ul className={styles.navigation}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'link activeLink' : 'link'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'link activeLink' : 'link'
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
