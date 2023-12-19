import React from 'react';
import styles from './ProductAbout.module.scss';

export const ProductAbout: React.FC = () => {
  // eslint-disable-next-line max-len
  const text = 'A transformative triple‑camecamera system that A transformative triple‑camera system thatA transformative triple‑camera system that A transformative triple‑camera system that A transformative triple‑camera system that A transformative triple‑camera system that A transformative triple‑camera system that';

  return (
    <div className={styles.about}>
      <h3 className={styles.about__title}>About</h3>
      <div className={styles.about__item}>
        <h4 className={styles.about__subtitle}>
          And then there was Pro
        </h4>
        <p className={styles.about__text}>
          {text}
        </p>
      </div>
      <div className={styles.about__item}>
        <h4 className={styles.about__subtitle}>
          And then there was Pro
        </h4>
        <p className={styles.about__text}>
          {text}
        </p>
      </div>
      <div className={styles.about__item}>
        <h4 className={styles.about__subtitle}>
          And then there was Pro
        </h4>
        <p className={styles.about__text}>
          {text}
        </p>
      </div>
    </div>
  );
};
