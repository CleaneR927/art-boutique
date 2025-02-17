import React, { useState } from 'react';
import Accordion from '../../shared/utils/Accordeon';
import NavBar from '../NavBar/NavBar';
import BurgerMenu from '../../shared/components/BurgerMenu';
import '../../shared/styles/header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__menu">
        <div className="header__menu-container">
          <div className="header__icon" onClick={toggleAccordion}>
            <BurgerMenu isOpen={isOpen} />
          </div>
        </div>
        <Accordion isOpen={isOpen}>
          <NavBar onClose={toggleAccordion} />
        </Accordion>
      </div>
    </header>
  );
};

export default Header;
