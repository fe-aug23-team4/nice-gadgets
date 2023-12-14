import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import not_found_logo_dark from '../../static/images/not_found_logo_dark.jpg';
import not_found_logo from '../../static/images/not_found_logo_bright.png';

export const NotFoundPage: React.FC = () => {
  const isDarkTheme = true;

  return (
    <div className={styles.container}>
      <img
        src={isDarkTheme ? not_found_logo_dark : not_found_logo}
        alt="page_not_found_logo"
        className={styles.not_found_logo}
      />
      <p className={isDarkTheme ? styles.headline_dark : styles.headline}>
        Ooops!
      </p>
      <h2 className={isDarkTheme ? styles.subtitle_dark : styles.subtitle}>
        Error 404 - Page Not Found.
      </h2>
      <h3 className={
        isDarkTheme
          ? styles.error_message_dark
          : styles.error_message
      }
      >
        The page you are looking for could not be found.
      </h3>
      <Link to="/" className={isDarkTheme ? styles.button_dark : styles.button}>
        Bring me back
      </Link>
    </div>
  );
};
