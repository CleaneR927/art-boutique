import styles from './index.module.scss';

const CardProduct = ({ image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image_container}>
        <img
          className={styles.card__image}
          key={image.id}
          src={image.url}
          alt={image.alt}
        />
        <div className={styles.card__mask} />
      </div>

      <p className={styles.card__description}>{image.description}</p>
    </div>
  );
};

export default CardProduct;
