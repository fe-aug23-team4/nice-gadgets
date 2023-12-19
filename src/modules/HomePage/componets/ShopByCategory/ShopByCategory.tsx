import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector } from '../../../../store/hooks';
import styles from './ShopByCategory.module.scss';
import categoryPhone from '../../../../static/banners/category-phones.png';
import categoryTablet from '../../../../static/banners/category-tablets.png';
import categoryAccessories
  from '../../../../static/banners/category-accessories.png';
import { getProductAmount } from '../../../../api/service';
import { Categories, ProductsAmount } from '../../../../types/Enums';

export const ShopByCategory: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [productsAmount, setProductsAmount] = useState<ProductsAmount>({
    phones: 0,
    tablets: 0,
    accessories: 0,
  });

  useEffect(() => {
    getProductAmount(Categories.All).then(setProductsAmount);
  }, []);

  return (
    <section
      className={cn('page__categories', {
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
        <article className={styles.shopByCategory__article}>
          <Link to="/phones">
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
                [styles.shopByCategory__subtitleDark]: isDarkTheme,
              })}
            >
              Mobile phones
            </h4>

            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isDarkTheme,
              })}
            >
              {`${productsAmount.phones} models`}
            </p>
          </Link>
        </article>

        <article className={styles.shopByCategory__article}>
          <Link to="/tablets">
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
                className={cn(
                  styles.shopByCategory__picture,
                  styles.shopByCategory__pictureTablet,
                )}
              />
            </div>
            <h4
              className={cn(styles.shopByCategory__subtitle, {
                [styles.shopByCategory__subtitleDark]: isDarkTheme,
              })}
            >
              Tablets
            </h4>
            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isDarkTheme,
              })}
            >
              {`${productsAmount.tablets} models`}
            </p>
          </Link>
        </article>

        <article className={styles.shopByCategory__article}>
          <Link to="/accessories">
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
                [styles.shopByCategory__subtitleDark]: isDarkTheme,
              })}
            >
              Accessories
            </h4>
            <p
              className={cn(styles.shopByCategory__content, {
                [styles.shopByCategory__contentDark]: isDarkTheme,
              })}
            >
              {`${productsAmount.accessories} models`}
            </p>
          </Link>
        </article>
      </div>
    </section>
  );
};
