import React from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { ReactComponent as HomeIcon }
  from '../../../static/icons/home_icon.svg';
import { ReactComponent as ArrowRightIcon }
  from '../../../static/icons/arrow-right_icon.svg';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');
  const currentPage = segments[segments.length - 1];
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { origin } = window.location;

  let url = '';
  const breadcrumbLinks = segments.map((segment, index) => {
    url += `${segment}`;

    const isLastSegment = index === segments.length - 1;

    return (
      <React.Fragment key={segment}>
        {isLastSegment ? (
          <div className={styles.link}>
            {segment === '' ? (
              <HomeIcon color={isDarkTheme ? '#f1f2f9' : '#0f0f11'} />
            ) : (
              <ArrowRightIcon
                color={isDarkTheme ? '#4a4d58' : '#b4bdc3'}
              />
            )}
            <p
              className={cn(styles.content, {
                [styles.content__DARK]: isDarkTheme && currentPage === segment,
                [styles.content__prev]: currentPage !== segment,
                [styles.content__prev__DARK]: currentPage
                  !== segment && isDarkTheme,
              })}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </p>
          </div>
        ) : (
          <Link to={`${origin}/${url}`} key={segment}>
            {segment === '' ? (
              <HomeIcon color={isDarkTheme ? '#f1f2f9' : '#0f0f11'} />
            ) : (
              <div className={styles.link}>
                <ArrowRightIcon
                  color={isDarkTheme ? '#4a4d58' : '#b4bdc3'}
                />
                <p
                  className={cn(styles.content, {
                    [styles.content__DARK]: isDarkTheme
                      && currentPage === segment,
                    [styles.content__prev]: currentPage !== segment,
                    [styles.content__prev__DARK]: currentPage
                      !== segment && isDarkTheme,
                  })}
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </p>
              </div>
            )}
          </Link>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={styles.breadcrumbContainer}>
      {breadcrumbLinks}
    </div>
  );
};
