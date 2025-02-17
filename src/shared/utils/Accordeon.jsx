import React from 'react';
import clsx from 'clsx';
import '../styles/accordeon.scss';

const Accordion = ({ isOpen, children }) => {
  return (
    <>
      <div className={clsx('accordion', isOpen && 'accordion--open')}>
        <div className="accordion__content">{children}</div>
      </div>
    </>
  );
};

export default Accordion;
