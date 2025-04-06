import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

const Accordion = ({ isOpen, children }) => {
  return (
    <div
      className={clsx(styles.accordion, isOpen && styles['accordion--open'])}
    >
      <div className={styles['accordion__content']}>{children}</div>
    </div>
  );
};

export default Accordion;
