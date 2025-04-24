import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

const Accordion = ({ isOpen, children, classe }) => {
  return (
    <div
      className={clsx(
        styles.accordion,
        isOpen && styles['accordion--open'],
        classe
      )}
    >
      <div className={styles.accordion__content}>{children}</div>
    </div>
  );
};

export default Accordion;
