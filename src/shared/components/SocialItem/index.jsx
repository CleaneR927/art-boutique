import React from 'react';
import './style.scss';

const SocialItem = ({ socialData }) => {
  return (
    <>
      {socialData.map((item) => (
        <li key={item.id}>
          <a
            className={'footer__link--social'}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            type={item.type}
            name={item.name}
          >
            <img src={item.icon} alt={`${item.name} link`} />
            {item.text && <span>{item.text}</span>}
          </a>
        </li>
      ))}
    </>
  );
};

export default SocialItem;
