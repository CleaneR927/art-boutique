import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const visibleImages = images.slice(0, 5);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleImages.length);
    setIsAutoPlay(false); // Останавливаем автопроигрывание
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + visibleImages.length) % visibleImages.length
    );
    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, visibleImages.length]);

  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => setIsAutoPlay(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAutoPlay]);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div
          className={styles.slider__container}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {visibleImages.map((image) => (
            <img
              key={image.id}
              className={styles.slider__item}
              src={image.url}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
      <button
        className={clsx(styles.slider__button, styles['slider__button--left'])}
        onClick={handlePrev}
      />
      <button
        className={clsx(styles.slider__button, styles['slider__button--right'])}
        onClick={handleNext}
      />
    </div>
  );
};

export default Slider;
