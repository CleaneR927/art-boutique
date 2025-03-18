import React from 'react';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import './index.scss';

const FadeInText = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div ref={ref} className={clsx('content', inView && 'visible')}>
      {children}
    </div>
  );
};

export default FadeInText;
