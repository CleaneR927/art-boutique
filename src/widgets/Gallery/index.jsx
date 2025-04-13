import ErrorComponent from '../../shared/components/ErrorComponent';
import Loader from '../../shared/components/Loader';
import useCardsData from '../../shared/hooks/useCardsData';
import CardProduct from '../CardProduct';

import styles from './index.module.scss';

const Gallery = () => {
  const { cards, loading, error } = useCardsData();

  return (
    <section className={styles.gallery}>
      <h2 className={styles.gallery__title}>
        Даже самые абстрактные идеи - <br />
        <span className={styles['gallery__title--accent']}>
          в самые эстетичные и стильные экземпляры
        </span>
      </h2>
      <div className={styles.gallery__container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorComponent error={error} />
        ) : (
          cards
            .slice(0, 5)
            .map((image) => <CardProduct key={image.id} image={image} />)
        )}
        <button className={styles.gallery__button} />
      </div>
    </section>
  );
};

export default Gallery;
