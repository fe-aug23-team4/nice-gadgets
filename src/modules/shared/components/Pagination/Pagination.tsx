import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import { useAppSelector } from '../../../../store/hooks';
import { getPages } from '../../../../utils/getPages';
import { getSearchWith } from '../../../../utils/getSearchWith';

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

  const pages = getPages(1, totalPages, currentPage);

  const onPageChange = (newPage: number) => {
    getSearchWith(searchParams, { page: newPage });
  };

  const setPage = (newPage: number) => {
    onPageChange(newPage);
  };

  const setPreviousPage = () => {
    if (!isFirstPage) {
      const previosPage = currentPage - 1;

      onPageChange(previosPage);
    }
  };

  const setNextPage = () => {
    if (!isLastPage) {
      const nextPage = currentPage + 1;

      onPageChange(nextPage);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li className={classNames('page-item', { disabled: isFirstPage })}>
        <button
          aria-label="Next page"
          type="button"
          className={classNames(
            styles.pagination__arrow,
            styles.pagination__item, {
              [styles.pagination__arrow__DARK]: isDarkTheme,
            },
          )}
          aria-disabled={isFirstPage}
          onClick={setPreviousPage}
        />
      </li>
      <div className={styles.pagination__numbers}>
        {pages.map(page => (
          <li
            className={styles.pagination__item}
            key={page}
          >
            <button
              className={classNames(styles.pagination__item, {
                [styles.pagination__item__SELECTED]:
                  currentPage === page,
                [styles.pagination__item__DARK]: isDarkTheme,
              })}
              type="button"
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </div>

      <li className={classNames('pagination__next', { disabled: isLastPage })}>
        <button
          aria-label="Next page"
          type="button"
          className={classNames(
            styles.pagination__arrow,
            styles.pagination__arrow__RIGHT,
            styles.pagination__item, {
              [styles.pagination__arrow__DARK]: isDarkTheme,
              [styles.pagination__arrow__DARK__RIGHT]: isDarkTheme,
            },
          )}
          aria-disabled={isLastPage}
          onClick={setNextPage}
        />
      </li>
    </ul>
  );
};
