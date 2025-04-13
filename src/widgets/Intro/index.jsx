import useResponsive from '../../shared/hooks/useResponsive';
import { TextMap } from './data';
import styles from './index.module.scss';

const Intro = ({ children }) => {
  const ContextTittle = useResponsive(631, TextMap);

  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h1 className={styles.section__title}>{ContextTittle}</h1>
        <div className={styles.section__divider} />
        <p className={styles.section__subtext}>
          Украшения ручной работы из натуральных камней, полные стиля и
          вдохновения, для истинных ценителей
        </p>
      </div>
      <div className={styles['section__container--slider']}>{children}</div>
      <button className={styles.section__button} />
    </section>
  );
};

export default Intro;
