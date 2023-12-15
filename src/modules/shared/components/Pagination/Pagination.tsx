import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import { useAppSelector } from '../../../../store/hooks';
import { getPages } from '../../../../utils/getPages';
import { getSearchWith } from '../../../../utils/getSearchWith';

type Props = {
  totalPages: number;
  currentPage: string | null;
};

export const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [searchParams] = useSearchParams();
  const isFirstPage = currentPage === '1';
  const isLastPage = Number(currentPage) === totalPages;

  const pages = getPages(1, totalPages, parseInt(currentPage || '1', 10));

  const onPageChange = (newPage: string) => {
    if (newPage === '1') {
      getSearchWith(searchParams, { perPage: null });
    }

    getSearchWith(searchParams, { page: newPage });
  };

  const setPage = (newPage: string) => {
    onPageChange(newPage);
  };

  const setPreviousPage = () => {
    if (!isFirstPage) {
      const previosPage = parseInt(currentPage || '1', 10) - 1;

      onPageChange(previosPage.toString());
    }
  };

  const setNextPage = () => {
    if (!isLastPage) {
      const nextPage = parseInt(currentPage || '1', 10) + 1;

      onPageChange(nextPage.toString());
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
                  currentPage === page.toString(),
                [styles.pagination__item__DARK]: isDarkTheme,
              })}
              type="button"
              onClick={() => setPage(page.toString())}
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
