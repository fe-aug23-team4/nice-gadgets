import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import styles from './PhonesPage.module.scss';

import { Phone } from '../../types/Phone';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { ProductList } from '../shared/ProductList';
import { Loader } from '../shared/Loader';
import { Pagination } from '../shared/Pagination';
import { Filtration } from '../shared/Filtration';
import { SortBy } from '../../types/SortBy';
import { useAppSelector } from '../../store/hooks';
import { getSearchWith } from '../../utils/getSearchWith';

type Props = {
  title: string
  loadData: (
    perPage: string,
    page: number,
    sort?: SortBy,
  ) => Promise<Phone[]>,
  loadAmount: () => Promise<number>
};

export const ProductsPage: React.FC<Props> = ({
  title,
  loadData,
  loadAmount,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [products, setProducts] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [searchParams] = useSearchParams();

  const defaultPerPage = 'all';
  const defaultSortBy = SortBy.Newest;
  const defaultPage = 1;

  const sort = searchParams.get('sort');
  const page = searchParams.get('page');
  const perPage = searchParams.get('perPage');

  useEffect(() => {
    if (searchParams.toString() === '') {
      getSearchWith(searchParams,
        { sort: defaultSortBy, page: defaultPage, perPage: defaultPerPage });
    }
  });

  const perPageString: string = perPage || defaultPerPage;
  const currentPageNumber: number = page !== null
    ? parseInt(page, 10)
    : defaultPage;
  const sortByEnum: SortBy = sort ? (sort as SortBy) : defaultSortBy;

  useEffect(() => {
    loadAmount()
      .then(setTotalAmount);
  }, [loadAmount]);

  const getTotalPages = () => {
    if (perPageString === 'All') {
      return 1;
    }

    return totalAmount / Number(perPage);
  };

  const totalPages = getTotalPages();

  const showPagination = () => {
    if (perPage === 'All') {
      return false;
    }

    if (totalAmount < Number(perPage)) {
      return false;
    }

    return (
      <Pagination
        totalPages={totalPages}
        currentPage={currentPageNumber}
      />
    );
  };

  useEffect(() => {
    setIsLoading(true);
    loadData(
      perPageString,
      currentPageNumber,
      sortByEnum,
    )
      .then(setProducts)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [sortByEnum, perPageString, currentPageNumber, error, loadData]);

  return (
    <div
      className={classNames(styles.productsPage, {
        [styles.productsPage__DARK]: isDarkTheme,
      })}
    >
      <p className={styles.productsPage__breadCrumbs}>
        <Breadcrumbs />
      </p>

      <h1
        className={classNames(styles.productsPage__title, {
          [styles.productsPage__title__DARK]: isDarkTheme,
        })}
      >
        {title}
      </h1>

      {isLoading && (
        <Loader />
      )}

      {!isLoading && error && (
        <>
          <p className={classNames(styles.productsPage__label, {
            [styles.productsPage__label__DARK]: isDarkTheme,
          })}
          >
            {error}
          </p>

          <button
            type="button"
            aria-label="Try again"
            className={classNames([styles.productsPage__errorButton], {
              [styles.productsPage__ErronButton__DARK]: isDarkTheme,
            })}
            onClick={() => setError('')}
          >
            Try again
          </button>
        </>
      )}

      {!isLoading && !error && (
        <>
          {totalAmount
            ? (
              <p
                className={classNames([styles.productsPage__counter], {
                  [styles.productsPage__counter__DARK]: isDarkTheme,
                })}
              >
                {`${totalAmount} modeles`}
              </p>
            ) : (
              <p>
                {`There are no ${title.toLowerCase()} yet`}
              </p>
            )}

          <div className={styles.productsPage__filter}>
            <Filtration sort={sortByEnum} perPage={perPageString} />
          </div>

          <div className={styles.productsPage__phonesList}>
            <ProductList phones={products} />
          </div>

          {showPagination()}
        </>
      )}
    </div>
  );
};
