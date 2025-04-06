import styles from './index.module.scss';

const Intro = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h1 className={styles.section__title}>АРТ БУТИК БИЖУТЕРИИ</h1>
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
