import React from 'react';

import useCardsData from '../../shared/hooks/useCardsData';
import Gallery from '../../widgets/Gallery';

import styles from './index.module.scss';

function GalleryPage() {
  const { cards, loading, error } = useCardsData();

  return (
    <section className={styles.gallery_page}>
      <h2 className={styles.gallery_page__title}>
        АРТ БУТИК БИЖУТЕРИИ / Портфолио работ
      </h2>
    </section>
  );
}

export default GalleryPage;
