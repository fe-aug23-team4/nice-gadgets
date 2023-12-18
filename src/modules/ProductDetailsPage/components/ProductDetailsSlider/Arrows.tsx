import React from 'react';
import styles from './ProductDetailsSlider.module.scss';

export const NextArrow: React.FC = () => {
  return (
    <>
      <div
        className={styles['slick-next-phone']}
      />
    </>
  );
};

export const PrevArrow: React.FC = () => {
  return (
    <>
      <div
        className={styles['slick-prev-phone']}
      />
    </>
  );
};
