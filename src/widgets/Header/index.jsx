import React, { useRef, useState } from 'react';
import Accordion from '../../shared/utils/Accordion';
import NavBar from '../NavBar';
import BurgerMenu from '../../shared/components/BurgerMenu';
import useOutsideClick from '../../shared/hooks/useOutsideClick';
import './style.scss';

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

  return (
    <header className="header">
      <div className="header__menu">
        <div className="header__menu-container">
          <div className="header__icon" onClick={toggleAccordion}>
            <BurgerMenu isOpen={isOpen} />
          </div>
        </div>
        <Accordion ref={accordionRef} isOpen={isOpen}>
          <NavBar onClose={toggleAccordion} />
        </Accordion>
      </div>
    </header>
  );
};

export default Header;
