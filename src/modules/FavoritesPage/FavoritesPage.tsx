import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './FavoritesPage.module.scss';
import { Loader } from '../shared/Loader';
import { Phone } from '../../types/Phone';
import { ProductList } from '../shared/ProductList';
import { getNewestPhones } from '../../api/service';
import { Breadcrumbs } from '../shared/Breadcrumbs';

export const FavoritesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newPhones = await getNewestPhones();

        setPhones(newPhones);
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const favourites: Phone[] = phones;
  const isThemeDark = false;
  const isLoading = favourites.length === 0;

  return (
    <section
      className={cn(styles.favouritesPage, {
        [styles.favouritesPageDark]: isThemeDark,
      })}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs />
          <h2
            className={cn(styles.favouritesPage__title, {
              [styles.favouritesPage__title__dark]: isThemeDark,
            })}
          >
            Favourites
          </h2>
          <p className={styles.favouritesPage__content}>
            {`${favourites.length || 0} items`}
          </p>

          <ProductList phones={favourites} />
        </>
      )}
    </section>
  );
};
