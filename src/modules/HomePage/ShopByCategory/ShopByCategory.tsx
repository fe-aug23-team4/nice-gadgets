import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import styles from './ShopByCategory.module.scss';

import categoryPhone from '../../../static/banners/category-phones.png';
import categoryTablet from '../../../static/banners/category-tablets.png';
import categoryAccessories
  from '../../../static/banners/category-accessories.png';

export const ShopByCategory: React.FC = () => {
  const isThemeDark = false;

  return (
    <section
      className={cn(styles.shopByCategory, {
        [styles.shopByCategoryDark]: isThemeDark,
      })}
    >
      <h2
        className={cn(styles.shopByCategory__title, {
          [styles.shopByCategory__titleDark]: isThemeDark,
        })}
      >
        Shop by category
      </h2>

      <div className={styles.shopByCategory__container}>
        <Link to="/phones" className={styles.shopByCategory__article}>
          <article>
            <div
              className={cn(
                styles.shopByCategory__imgContainer,
                styles.shopByCategory__imgPhones,
                { [styles.shopByCategory__imgDark]: isThemeDark },
              )}
            >
              <img
                src={categoryPhone}
                alt="mobile-phones"
                className={styles.shopByCategory__picture}
              />
            </div>
            <h3
              className={cn(styles.shopByCategory__subtitle, {
                [styles.shopByCategory__titleDark]: isThemeDark,
              })}
            >
              Mobile phones
            </h3>

            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isThemeDark,
              })}
            >
              95 models
            </p>
          </article>
        </Link>

        <Link to="/tablets" className={styles.shopByCategory__article}>
          <article>
            <div
              className={cn(
                styles.shopByCategory__imgContainer,
                styles.shopByCategory__imgTablets,
                { [styles.shopByCategory__imgDark]: isThemeDark },
              )}
            >
              <img
                src={categoryTablet}
                alt="tablets"
                className={`${styles.shopByCategory__picture}
              ${styles.shopByCategory__pictureTablet}`}
              />
            </div>
            <h3
              className={cn(styles.shopByCategory__subtitle, {
                [styles.shopByCategory__titleDark]: isThemeDark,
              })}
            >
              Tablets
            </h3>
            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isThemeDark,
              })}
            >
              24 models
            </p>
          </article>
        </Link>

        <Link to="/accessories" className={styles.shopByCategory__article}>
          <article>
            <div
              className={cn(
                styles.shopByCategory__imgContainer,
                styles.shopByCategory__imgAccessories,
                { [styles.shopByCategory__imgDark]: isThemeDark },
              )}
            >
              <img
                src={categoryAccessories}
                alt="accessories"
                className={`${styles.shopByCategory__picture}
                ${styles.shopByCategory__pictureAccessories}`}
              />
            </div>
            <h3
              className={cn(styles.shopByCategory__subtitle, {
                [styles.shopByCategory__titleDark]: isThemeDark,
              })}
            >
              Accessories
            </h3>
            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isThemeDark,
              })}
            >
              100 models
            </p>
          </article>
        </Link>
      </div>
    </section>
  );
};
