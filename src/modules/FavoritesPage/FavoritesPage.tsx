import React from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../store/hooks';
import styles from './FavoritesPage.module.scss';
import { ProductList } from '../shared/ProductList';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { EmptyFavourites } from '../shared/EmptyFavourites';

export const FavoritesPage: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { favorites } = useAppSelector(state => state.favorites);
  const isEmptyFavorites = favorites.length === 0;

  return (isEmptyFavorites
    ? <EmptyFavourites />
    : (
      <section
        className={cn(styles.favouritesPage, {
          [styles.favouritesPageDark]: isDarkTheme,
        })}
      >

        <Breadcrumbs />
        <h2
          className={cn(styles.favouritesPage__title, {
            [styles.favouritesPage__title__dark]: isDarkTheme,
          })}
        >
          Favourites
        </h2>
        <p className={styles.favouritesPage__content}>
          {`${favorites.length || 0} items`}
        </p>

        <ProductList phones={favorites} />
      </section>
    )
  );
};
