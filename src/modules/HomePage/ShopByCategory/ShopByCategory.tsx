import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ShopByCategory.module.scss';

import categoryPhone from '../../../static/img/category-phones.png';
import categoryTablet from '../../../static/img/category-tablets.png';
import categoryAccessories from '../../../static/img/category-accessories.png';

export const ShopByCategory: React.FC = () => {
  return (
    <div className={styles.shopByCategory}>
      <h2 className={styles.shopByCategory__title}>Shop by category</h2>
      <div className={styles.shopByCategory__container}>
        <Link to="/phones" className={styles.shopByCategory__article}>
          <article>
            <img
              src={categoryPhone}
              alt="mobile-phones"
              className={styles.shopByCategory__img}
            />
            <h3 className={styles.shopByCategory__subtitle}>Mobile phones</h3>

            <p className={styles.shopByCategory__content}>95 models</p>
          </article>
        </Link>

        <Link to="/tablets" className={styles.shopByCategory__article}>
          <article>
            <img
              src={categoryTablet}
              alt="tablets"
              className={styles.shopByCategory__img}
            />
            <h3 className={styles.shopByCategory__subtitle}>Tablets</h3>
            <p className={styles.shopByCategory__content}>24 models</p>
          </article>
        </Link>

        <Link to="/accessories" className={styles.shopByCategory__article}>
          <article>
            <img
              src={categoryAccessories}
              alt="accessories"
              className={styles.shopByCategory__img}
            />
            <h3 className={styles.shopByCategory__subtitle}>Accessories</h3>
            <p className={styles.shopByCategory__content}>100 models</p>
          </article>
        </Link>
      </div>
    </div>
  );
};
