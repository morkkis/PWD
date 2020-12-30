import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './CfSideBar.module.scss';

const CfSideBar: React.FC = () => (
  <nav className={styles.cfNavigation}>
    <NavLink to="/" className={styles.cfNavigationItem}>Main</NavLink>
    <NavLink to="/about" className={styles.cfNavigationItem}>About</NavLink>
  </nav>
);

export default CfSideBar;
