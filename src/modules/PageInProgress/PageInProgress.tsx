import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
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
        className={cn([styles.page_in_progress_icon], {
          [styles.page_in_progress_icon_dark]: isDarkTheme,
        })}
      />
      <p className={cn([styles.headline], {
        [styles.headline_dark]: isDarkTheme,
      })}
      >
        Coming soon!
      </p>
      {/* eslint-disable */}
      <h2 className={cn([styles.subtitle], {
        [styles.subtitle_dark]: isDarkTheme,
      })}
      >
        This section is currently in development. Please return later or follow us on github to get notified of updates.
      </h2>
      {/* eslint-enable */}
      <div className={styles.button_container}>
        <Link
          to="/"
          className={cn([styles.button_back], {
            [styles.button_back_dark]: isDarkTheme,
          })}
        >
          Bring me back
        </Link>
        <Link
          to="https://github.com/fe-aug23-team4"
          className={cn([styles.button_git], {
            [styles.button_git_dark]: isDarkTheme,
          })}
          target="_blank"
        >
          Our Github page
        </Link>
      </div>
    </div>
  );
};
