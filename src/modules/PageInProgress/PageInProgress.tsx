import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageInProgress.module.scss';
import { useAppSelector } from '../../store/hooks';
import cog_icon from '../../static/icons/cog-icon.svg';

export const PageInProgress: React.FC = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);

  return (
    <div className={styles.container}>
      <img
        src={cog_icon}
        alt="page_in_progress_icon"
        className={
          isDarkTheme
            ? styles.page_in_progress_icon_dark
            : styles.page_in_progress_icon
        }
      />
      <p className={isDarkTheme ? styles.headline_dark : styles.headline}>
        Coming soon!
      </p>
      {/* eslint-disable */}
      <h2 className={isDarkTheme ? styles.subtitle_dark : styles.subtitle}>
        This section is currently in development. Please return later or follow us on github to get notified of updates.
      </h2>
      {/* eslint-enable */}
      <div className={styles.button_container}>
        <Link
          to="/"
          className={isDarkTheme ? styles.button_back_dark : styles.button_back}
        >
          Bring me back
        </Link>
        <Link
          to="https://github.com/fe-aug23-team4"
          className={isDarkTheme ? styles.button_git_dark : styles.button_git}
        >
          Our Github page
        </Link>
      </div>
    </div>
  );
};
