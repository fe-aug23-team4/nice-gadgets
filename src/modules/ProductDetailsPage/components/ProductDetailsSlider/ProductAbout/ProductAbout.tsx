import React from 'react';
import styles from './ProductAbout.module.scss';

export const ProductAbout: React.FC = () => {
  // eslint-disable-next-line max-len
  const text = 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.';

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
