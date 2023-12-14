import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../../static/logo/logo_bright.png';
import logo_dark from '../../../static/logo/logo_dark.png';
import top_button
  from '../../../static/buttons/slider-up-button-default_button.svg';
import top_button_dark
  from '../../../static/buttons/slider-up-button-default_button_dark.svg';

export const Footer: React.FC = () => {
  const isDarkTheme = false;

  return (
    <footer className={`${isDarkTheme ? styles.footer__dark : styles.footer}`}>
      <div className={styles.container}>
        <Link to="/">
          <img
            src={isDarkTheme ? logo_dark : logo}
            alt="nice_gadgets_logo"
            className={styles.nav_logo}
          />
        </Link>
        <div className={styles.nav_center}>
          <Link to="/github" className={`${isDarkTheme ? styles.nav_text__dark : styles.nav_text}`}>
            Github
          </Link>
          <Link to="/contacts" className={`${isDarkTheme ? styles.nav_text__dark : styles.nav_text}`}>
            Contacts
          </Link>
          <Link to="/rights" className={`${isDarkTheme ? styles.nav_text__dark : styles.nav_text}`}>
            Rights
          </Link>
        </div>
        <div className={styles.return_button}>
          <Link to="#top" className={styles.button_top}>
            Back to Top
          </Link>
          <Link to="/">
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
