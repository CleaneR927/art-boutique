import React from 'react';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.scss';

const FadeInText = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div ref={ref} className={clsx(styles.content, inView && styles.visible)}>
      {children}
    </div>
  );
};

export default FadeInText;
