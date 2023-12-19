import cn from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Pagination.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { getPages } from '../../../utils/getPages';
import { getSearchWith } from '../../../utils/getSearchWith';

import {
  ReactComponent as NextIcon,
} from '../../../static/buttons/Button_DefaultArrowLeft.svg';

import {
  ReactComponent as PrevIcon,
} from '../../../static/buttons/Button_DefaultArrowRight.svg';

type Props = {
  totalPages: number;
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [searchParams] = useSearchParams();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const pages = getPages(totalPages, currentPage);

  const findColorForArrow = (isDisabled: boolean) => {
    if (isDarkTheme && isDisabled) {
      return '#4A4D58';
    }

    if (isDarkTheme) {
      return '#F1F2F9';
    }

    if (isDisabled) {
      return '#B4BDC3';
    }

    return '#0F0F11';
  };

  return (
    <ul className={styles.pagination}>
      <li
        className={cn(styles.pagination__item, {
          [styles.pagination__item__DARK]: isDarkTheme,
        })}
      >
        <Link
          to={{
            search: getSearchWith(searchParams, { page: currentPage - 1 }),
          }}
          className={cn(styles.pagination__arrow, {
            [styles.pagination__arrow__DARK]: isDarkTheme,
            [styles.pagination__arrow__DISABLED]: isLastPage,
            [styles.apagination__arrow__DARK__DISABLED]:
            isLastPage && isDarkTheme,
          })}
          aria-disabled={isFirstPage}
        >
          <PrevIcon
            color={findColorForArrow(isFirstPage)}
          />
        </Link>
      </li>

      <div className={styles.pagination__numbers}>
        {pages.map(page => (
          <li
            className={cn(styles.pagination__item, {
              [styles.pagination__item__DARK]: isDarkTheme,
              [styles.pagination__item__active]: currentPage === page,
              [styles.pagination__item__DARK__active]:
                currentPage === page && isDarkTheme,
            })}
            key={page}
          >
            <Link
              to={{
                // eslint-disable-next-line object-shorthand
                search: getSearchWith(searchParams, { page: page }),
              }}
              className={cn(styles.pagination__number, {
                [styles.pagination__number__DARK]: isDarkTheme,
                [styles.pagination__number__SELECTED]: currentPage === page,
                [styles.pagination__number__DARK__SELECTED]:
                  currentPage === page && isDarkTheme,
              })}
            >
              {page}
            </Link>
          </li>
        ))}
      </div>

      <li
        className={cn(styles.pagination__item, {
          [styles.pagination__item__DARK]: isDarkTheme,
        })}
      >
        <Link
          to={{
            search: getSearchWith(searchParams, { page: currentPage + 1 }),
          }}
          className={cn(styles.pagination__arrow, {
            [styles.pagination__arrow__DARK]: isDarkTheme,
            [styles.pagination__arrow__DISABLED]: isLastPage,
            [styles.apagination__arrow__DARK__DISABLED]:
              isLastPage && isDarkTheme,
          })}
          aria-disabled={isLastPage}
        >
          <NextIcon
            color={findColorForArrow(isLastPage)}
          />
        </Link>
      </li>
    </ul>
  );
};
