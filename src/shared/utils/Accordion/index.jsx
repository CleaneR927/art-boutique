import React from 'react';
import clsx from 'clsx';
import './style.scss';

const Accordion = React.forwardRef(({ isOpen, children }, ref) => {
  return (
    <div ref={ref} className={clsx('accordion', isOpen && 'accordion--open')}>
      <div className="accordion__content">{children}</div>
    </div>
  );
});

export default Accordion;
