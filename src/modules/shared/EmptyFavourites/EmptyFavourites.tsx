import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './EmptyFavourites.module.scss';
import { useAppSelector } from '../../../store/hooks';
import fav_icon from '../../../static/icons/favourites_icon.svg';

export const EmptyFavourites: React.FC = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);

  return (
    <div className={styles.container}>
      <img
        src={fav_icon}
        alt="favourites_icon"
        className={cn([styles.fav_icon], {
          [styles.fav_icon_dark]: isDarkTheme,
        })}
      />
      <p className={cn([styles.headline], {
        [styles.headline_dark]: isDarkTheme,
      })}
      >
        No favourites yet!
      </p>
      <h2 className={cn([styles.subtitle], {
        [styles.subtitle_dark]: isDarkTheme,
      })}
      >
        You can add an item to your favourites by clicking heart icon
      </h2>
      <Link
        to="/"
        className={cn([styles.button], {
          [styles.button_dark]: isDarkTheme,
        })}
      >
        Bring me back
      </Link>
    </div>
  );
};
