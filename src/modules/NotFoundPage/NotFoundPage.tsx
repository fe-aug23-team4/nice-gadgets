import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './NotFoundPage.module.scss';
import not_found_logo_dark from '../../static/images/not_found_logo_dark.jpg';
import not_found_logo from '../../static/images/not_found_logo_bright.png';
import { useAppSelector } from '../../store/hooks';

export const NotFoundPage: React.FC = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);

  return (
    <div className={styles.container}>
      <img
        src={isDarkTheme ? not_found_logo_dark : not_found_logo}
        alt="page_not_found_logo"
        className={styles.not_found_logo}
      />
      <p className={cn([styles.headline], {
        [styles.headline_dark]: isDarkTheme,
      })}
      >
        Ooops!
      </p>
      <h2 className={cn([styles.subtitle], {
        [styles.subtitle_dark]: isDarkTheme,
      })}
      >
        Error 404 - Page Not Found.
      </h2>
      <h3 className={cn([styles.error_message], {
        [styles.error_message_dark]: isDarkTheme,
      })}
      >
        The page you are looking for could not be found.
      </h3>
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
