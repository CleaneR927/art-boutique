import React, { useRef, useState } from 'react';

import BurgerMenu from '../../shared/components/BurgerMenu';
import useOutsideClick from '../../shared/hooks/useOutsideClick';
import useScrollLock from '../../shared/hooks/useScrollLock';
import Accordion from '../../shared/utils/Accordion';
import NavBar from '../NavBar';

import styles from './index.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

  const toggleAccordion = (event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeAccordion = () => {
    setIsOpen(false);
  };

  useOutsideClick(accordionRef, closeAccordion);

  useScrollLock(isOpen);

  return (
    <header className={styles.header} ref={accordionRef}>
      <div className={styles.header__container}>
        <div className={styles.header__menu}>
          <div className={styles.header__icon} onClick={toggleAccordion}>
            <BurgerMenu isOpen={isOpen} />
          </div>
        </div>
        <Accordion isOpen={isOpen} classe={styles.header__bottom_line}>
          <NavBar onClose={toggleAccordion} />
        </Accordion>
      </div>
      {isOpen && <div className={styles.overlay} onClick={closeAccordion} />}
    </header>
  );
};

export default Header;
