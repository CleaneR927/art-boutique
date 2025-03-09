import React from 'react';
import NavItem from '../../shared/components/NavItem';
import './style.scss';

const NavBar = ({ onClose }) => {
  const navItems = [
    'Новости',
    'Рекомендации',
    'Карточки новых товаров',
    'Коллекции',
    'Информация о магазине'
  ];

  return (
    <div className="navigate">
      <div className="navigate__column ">
        <ul className="navigate__column--list">
          {navItems.map((item, index) => (
            <NavItem key={index} title={item} onClick={onClose} />
          ))}
        </ul>
      </div>
      <div className="navigate__divider" />
      <div className="navigate__column ">
        <ul className="navigate__column--contacts">
          <li className="navigate__contact">
            <span className="email--title">Моя почта:</span>
            <p className="email">example@emample.com</p>
          </li>
          <li className="navigate__contact">
            <span className="time--title">Рабочее время:</span>
            <p className="time">с 12:00 до 20:00</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
