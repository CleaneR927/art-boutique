import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

const Accordion = React.forwardRef(({ isOpen, children }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(styles.accordion, isOpen && styles['accordion--open'])}
    >
      <div className={styles['accordion__content']}>{children}</div>
    </div>
  );
});

export default Accordion;
