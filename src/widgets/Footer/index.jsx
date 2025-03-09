import React from 'react';
import SocialItem from '../../shared/components/SocialItem';
import dataSocial from '../../shared/data/dataSocial';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__context">
          <div className="footer__context--title--container">
            <h2 className="footer__context--title">АРТ</h2>
            <h2 className="footer__context--title">БУТИК БИЖУТЕРИИ</h2>
          </div>
          <p className="footer__context--subtext">Авторский бренд украшений</p>
        </div>
        <div className="footer__context--small">
          <div className="footer__context--text--container">
            <h2 className="footer__context--text">ART</h2>
            <h2 className="footer__context--text">BOUTIQUE</h2>
          </div>
        </div>
        <div className="footer__divider" />
        <div className="footer__link--container">
          <ul className="footer__link--socials">
            <SocialItem socialData={dataSocial} />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
