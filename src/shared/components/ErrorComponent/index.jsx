import styles from './index.module.scss';

const ErrorComponent = ({ error }) => {
  return (
    <div className={styles.error}>
      <h2>Ошибка: {error}</h2>
    </div>
  );
};

export default ErrorComponent;
