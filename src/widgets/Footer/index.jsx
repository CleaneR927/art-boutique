import React from 'react';
import SocialItem from '../../shared/components/SocialItem';
import dataSocial from './data';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__context}>
          <div className={styles['footer__context_title--container']}>
            <h2 className={styles.footer__context_title}>
              АРТ <span className={styles['footer__context_title--dot']}></span>{' '}
              БУТИК БИЖУТЕРИИ
            </h2>
          </div>
          <p className={styles['footer__context--subtext']}>
            Авторский бренд украшений
          </p>
        </div>
        {/* <div className="footer__context--small">
          <div className="footer__context--text--container">
            <h2 className="footer__context--text">ART</h2>
            <h2 className="footer__context--text">BOUTIQUE</h2>
          </div>
        </div> */}
        <div className={styles.footer__divider} />
        <div className={styles['footer__link--container']}>
          <ul className={styles['footer__link--socials']}>
            <SocialItem socialData={dataSocial} />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
