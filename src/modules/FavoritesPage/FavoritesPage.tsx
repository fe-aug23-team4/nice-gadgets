import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './FavoritesPage.module.scss';
import homeIcon from './icons/Home.svg';
import homeIconDark from './icons/HomeDark.svg';
import arrowIcon from './icons/Chevron (Arrow Right).svg';

export const FavoritesPage: React.FC = () => {
  const favourites: number[] = [1, 2, 3, 4, 5];
  const isThemeDark = false;

  return (
    <section
      className={cn(styles.favouritesPage,
        { [styles.favouritesPageDark]: isThemeDark })}
    >
      <div className={styles.favouritesPage__top}>
        <Link
          to="/"
        >
          {isThemeDark
            ? (
              <img
                src={homeIconDark}
                alt="home-icon"
              />
            ) : (
              <img
                src={homeIcon}
                alt="home-icon"
              />
            )}

        </Link>

        <img
          src={arrowIcon}
          alt="arrow-icon"
        />

        <p className={styles.favouritesPage__top__content}>
          Favourites
        </p>
      </div>

      <h2
        className={cn(styles.favouritesPage__title,
          { [styles.favouritesPage__title__dark]: isThemeDark })}
      >
        Favourites
      </h2>
      <p
        className={styles.favouritesPage__content}
      >
        {`${favourites.length || 0} items`}
      </p>

      <div className={styles.favouritesPage__gridContainer}>
        {favourites.map(card => (
          <div
            key={card}
            className={styles.favouritesPage__card}
          >
            <h3>{`Card ${card}`}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
