import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Footer.module.scss';
import logo from '../../../static/logo/logo_bright.png';
import logo_dark from '../../../static/logo/logo_dark.png';
import top_button
  from '../../../static/buttons/slider-up-button-default_button.svg';
import top_button_dark
  from '../../../static/buttons/slider-up-button-default_button_dark.svg';
import { useAppSelector } from '../../../store/hooks';

export const Footer: React.FC = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);

  return (
    <footer className={cn([styles.footer], {
      [styles.footer__dark]: isDarkTheme,
    })}
    >
      <div className={styles.container}>
        <Link to="/">
          <img
            src={isDarkTheme ? logo_dark : logo}
            alt="nice_gadgets_logo"
            className={styles.nav_logo}
          />
        </Link>
        <div className={styles.nav_center}>
          <Link
            to="https://github.com/fe-aug23-team4"
            className={cn([styles.nav_text], {
              [styles.nav_text__dark]: isDarkTheme,
            })}
          >
            Github
          </Link>
          <Link
            to="/"
            className={cn([styles.nav_text], {
              [styles.nav_text__dark]: isDarkTheme,
            })}
          >
            Contacts
          </Link>
          <Link
            to="/"
            className={cn([styles.nav_text], {
              [styles.nav_text__dark]: isDarkTheme,
            })}
          >
            Rights
          </Link>
        </div>
        <div className={styles.return_button}>
          <Link to="#top" className={styles.button_top}>
            Back to Top
          </Link>
          <Link to="#top">
            <img
              src={isDarkTheme ? top_button_dark : top_button}
              alt="nice_gadgets_logo"
              className={styles.button_logo}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
