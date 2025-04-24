import { useRef, useState } from 'react';
import Accordion from '../../shared/utils/Accordion';
import styles from './index.module.scss';
import useOutsideClick from '../../shared/hooks/useOutsideClick';
import arrow from '../../assets/images/btn-about-me.svg';
import clsx from 'clsx';

const AboutMe = ({ data }) => {
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
    <section className={styles.about}>
      <div className={styles.about__image_container}>
        <img className={styles.about__image} src={data.image} alt={data.alt} />
        <div className={styles.about__mask} />
      </div>
      <div className={styles.about__description}>
        <h3 className={styles.about__title}>Моя деятельность</h3>
        <p className={styles.about__text}>{data.description}</p>
        <div
          className={styles['about__button-container']}
          onClick={toggleAccordion}
          ref={accordionRef}
        >
          <button className={styles['about__button']}>
            <p className={styles.about__button_text}>Обо мне</p>
            <img
              className={clsx(
                styles.about__button_icon,
                isOpen && styles['about__button_icon--rotate']
              )}
              src={arrow}
              alt="Стрелочка"
            />
          </button>
          <div className={styles['about__accordion-container']}>
            <Accordion isOpen={isOpen} classe={styles.about__bottom_line}>
              <p className={styles.about__subtext}>{data.subtext}</p>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
