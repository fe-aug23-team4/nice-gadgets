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
  currentPage: string;
};

export const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [searchParams] = useSearchParams();
  const currentPageNumber = Number(currentPage);
  const prevPage = (currentPageNumber - 1).toString();
  const nextPage = (currentPageNumber + 1).toString();
  const isFirstPage = currentPageNumber === 1;
  const isLastPage = currentPageNumber === totalPages;

  const pages = getPages(totalPages, currentPageNumber);

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
        className={cn(styles.pagination__item,
          styles.pagination__item__first, {
            [styles.pagination__item__DARK]: isDarkTheme,
          })}
        key="arrowLeft"
      >
        <Link
          to={{
            search: getSearchWith(searchParams, { page: prevPage }),
          }}
          className={cn(styles.pagination__arrow, {
            [styles.pagination__arrow__DARK]: isDarkTheme,
            [styles.pagination__arrow__DISABLED]: isFirstPage,
            [styles.apagination__arrow__DARK__DISABLED]:
            isFirstPage && isDarkTheme,
          })}
          aria-disabled={isFirstPage}
        >
          <PrevIcon
            color={findColorForArrow(isFirstPage)}
          />
        </Link>
      </li>

      <div className={styles.pagination__numbers}>
        {pages.map(pageNumber => (
          <li
            className={cn(styles.pagination__item, {
              [styles.pagination__item__DARK]: isDarkTheme,
            })}
            key={pageNumber.key}
          >
            <Link
              to={{
                search: getSearchWith(searchParams, { page: pageNumber.value }),
              }}
              className={cn(styles.pagination__number, {
                [styles.pagination__number__DARK]: isDarkTheme,
                [styles.pagination__number__SELECTED]:
                  currentPage === pageNumber.value,
                [styles.pagination__number__DISABLED]:
                  pageNumber.value === '..',
                [styles.pagination__number__DARK__SELECTED]:
                  currentPage === pageNumber.value && isDarkTheme,
                [styles.pagination__number__DARK__DISABLED]:
                  pageNumber.value === '..' && isDarkTheme,
              })}
              aria-disabled={currentPage === '..'}
            >
              {pageNumber.value}
            </Link>
          </li>
        ))}
      </div>

      <li
        className={cn(styles.pagination__item, {
          [styles.pagination__item__DARK]: isDarkTheme,
        })}
        key="arrowRight"
      >
        <Link
          to={{
            search: getSearchWith(searchParams, { page: nextPage }),
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
