import React from 'react';
import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <NavLink to='/quotes' className={classes.logo}>
        Great Quotes
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' className={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' className={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
