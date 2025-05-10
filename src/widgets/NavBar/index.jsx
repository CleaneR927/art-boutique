import React from 'react';

import NavItem from '../../shared/components/NavItem';
import { navItems } from './data';

import styles from './index.module.scss';

const NavBar = ({ onClose }) => {
  return (
    <nav className={styles.navigate}>
      <div className={styles.navigate__column}>
        <ul className={styles['navigate__column--list']}>
          {navItems.map((item, index) => (
            <NavItem key={index} title={item} onClick={onClose} />
          ))}
        </ul>
      </div>
      <div className={styles.navigate__divider} />
      <div className={styles.navigate__column}>
        <ul className={styles['navigate__column--contacts']}>
          <li className={styles.navigate__contact}>
            <span className={styles['email--title']}>Моя почта:</span>
            <p className={styles.email}>example@emample.com</p>
          </li>
          <li className={styles.navigate__contact}>
            <span className={styles['time--title']}>Рабочее время:</span>
            <p className={styles.time}>с 12:00 до 20:00 (Екатеринбург)</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
