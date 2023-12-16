import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector } from '../../../../store/hooks';
import styles from './ShopByCategory.module.scss';
import categoryPhone from '../../../../static/banners/category-phones.png';
import categoryTablet from '../../../../static/banners/category-tablets.png';
import categoryAccessories
  from '../../../../static/banners/category-accessories.png';

export const ShopByCategory: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  return (
    <section
      className={cn(styles.shopByCategory, {
        [styles.shopByCategoryDark]: isDarkTheme,
      })}
    >
      <h3
        className={cn(styles.shopByCategory__title, {
          [styles.shopByCategory__titleDark]: isDarkTheme,
        })}
      >
        Shop by category
      </h3>

      <div className={styles.shopByCategory__container}>
        <Link to="/phones" className={styles.shopByCategory__article}>
          <article>
            <div
              className={cn(
                styles.shopByCategory__imgContainer,
                styles.shopByCategory__imgPhones,
                { [styles.shopByCategory__imgDark]: isDarkTheme },
              )}
            >
              <img
                src={categoryPhone}
                alt="mobile-phones"
                className={styles.shopByCategory__picture}
              />
            </div>
            <h4
              className={cn(styles.shopByCategory__subtitle, {
                [styles.shopByCategory__titleDark]: isDarkTheme,
              })}
            >
              Mobile phones
            </h4>

            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isDarkTheme,
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
                { [styles.shopByCategory__imgDark]: isDarkTheme },
              )}
            >
              <img
                src={categoryTablet}
                alt="tablets"
                className={cn(styles.shopByCategory__picture,
                  styles.shopByCategory__pictureTablet)}
              />
            </div>
            <h4
              className={cn(styles.shopByCategory__subtitle, {
                [styles.shopByCategory__titleDark]: isDarkTheme,
              })}
            >
              Tablets
            </h4>
            <p
              className={cn(
                styles.shopByCategory__content,
                { [styles.shopByCategory__contentDark]: isDarkTheme },
              )}
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
                { [styles.shopByCategory__imgDark]: isDarkTheme },
              )}
            >
              <img
                src={categoryAccessories}
                alt="accessories"
                className={`${styles.shopByCategory__picture}
                ${styles.shopByCategory__pictureAccessories}`}
              />
            </div>
            <h4
              className={cn(styles.shopByCategory__subtitle, {
                [styles.shopByCategory__titleDark]: isDarkTheme,
              })}
            >
              Accessories
            </h4>
            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isDarkTheme,
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
