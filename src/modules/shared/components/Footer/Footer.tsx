import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../static/Logo/nav_logo.svg';
import button from '../../static/Logo/top_button.png';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/">
            <img
              src={logo}
              alt="nice_gadgets_logo"
              className={styles.nav_logo}
            />
          </Link>
          <div className={styles.nav_center}>
            <Link to="/github" className={styles.nav_text}>
              Github
            </Link>
            <Link to="/contacts" className={styles.nav_text}>
              Contacts
            </Link>
            <Link to="/rights" className={styles.nav_text}>
              Rights
            </Link>
          </div>
          <div className="return_button">
            <Link to="#top" className={styles.button_top}>
              Back to Top
            </Link>
            <Link to="/">
              <img
                src={button}
                alt="nice_gadgets_logo"
                className={styles.button_logo}
              />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};
