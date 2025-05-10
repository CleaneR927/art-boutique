import React from 'react';

import styles from './index.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <h2
        className={styles.notFound__title}
      >{`Упс...кажется вы ошиблись адресом :(`}</h2>
    </div>
  );
}

export default NotFoundPage;
