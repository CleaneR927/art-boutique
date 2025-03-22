import React from 'react';
import SocialItem from '../../shared/components/SocialItem';
import { ArraySocial, TextMap } from './data';
import useResponsive from '../../shared/hooks/useResponsive';
import styles from './index.module.scss';

const Footer = () => {
  const ContextTittle = useResponsive(630, TextMap);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles['footer__context']}>
          <h2 className={styles.footer__context_title}>
            {ContextTittle.split(' ')[0]}
            <span className={styles['footer__context_title--dot']}></span>
            {ContextTittle.split(' ').slice(1).join(' ')}
          </h2>
          <p className={styles['footer__context_subtext']}>
            Авторский бренд украшений
          </p>
        </div>
        <div className={styles.footer__container_divider} />
        <div className={styles['footer__links']}>
          <ul className={styles['footer__links--socials']}>
            <SocialItem socialData={ArraySocial} />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
