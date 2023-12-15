import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import styles from './PhonesPage.module.scss';
import { useAppSelector } from '../../store/hooks';
import { PhoneCard } from '../shared/components/PhoneCard';
import { Pagination } from '../shared/components/Pagination';
import { getSortedProducts } from '../../utils/getFilteredProducts';
import { getSearchWith } from '../../utils/getSearchWith';
import { Phone } from '../../types/Phone';
import { SortBy } from '../../types/SortBy';

const SORT_TYPES = {
  age: 'Newest',
  title: 'Alphabetically',
  price: 'Cheapest',
};

const PER_PAGE = ['4', '8', '16'];

type Props = {
  title: string
  sort: SortBy | null,
  perPage: string | null,
  page: string | null,
  getProductsWithSearchParams: (
    sort: SortBy | null,
    perPage: string | null,
    page: string | null,
  ) => Promise<Phone[]>,
};

export const ProductsPage: React.FC<Props> = ({
  title,
  getProductsWithSearchParams,
  sort,
  perPage,
  page,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [products, setProducts] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string>('');
  // const sort = searchParams.get('sort');
  // const perPage = searchParams.get('perPage');
  // const page = searchParams.get('page');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const availibleProducts = await getProductsWithSearchParams(
          sort,
          perPage,
          page,
        );

        setProducts(availibleProducts);
      } catch {
        setError('Something went wrong. Try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [sort, perPage, page, error, getProductsWithSearchParams]);

  const sortedProducts = getSortedProducts(products, searchParams);
  const productsCounter = sortedProducts.length;
  const totalPages = Math.floor(productsCounter / Number(perPage));

  const onSortChange = (newSort: SortBy) => {
    if (sort === null) {
      return getSearchWith(searchParams, { sort: null });
    }

    return getSearchWith(searchParams, { sort: newSort });
  };

  const onPerPageChange = (newPerPage: string) => {
    if (perPage === null) {
      return getSearchWith(searchParams, { perPage: '1' });
    }

    return getSearchWith(searchParams, { perPage: newPerPage });
  };

  const showPagination = () => {
    if (Number(productsCounter) > Number(perPage)) {
      return (
        <Pagination
          totalPages={totalPages}
          currentPage={page}
        />
      );
    }

    return false;
  };

  return (
    <div
      className={classNames(styles.productsPage, {
        [styles.productsPage__DARK]: isDarkTheme,
      })}
    >
      <p className={styles.productsPage__breadCrumbs}>
        Bread crumbs
      </p>

      <h1
        className={classNames(styles.productsPage__title, {
          [styles.productsPage__title__DARK]: isDarkTheme,
        })}
      >
        {title}
      </h1>

      {isLoading
        ? <div className="Loader">Loader</div>
        : (
          <>
            {error
              ? (
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
              ) : (
                <>
                  {productsCounter
                    ? (
                      <p
                        className={classNames([styles.productsPage__counter], {
                          [styles.productsPage__counter__DARK]: isDarkTheme,
                        })}
                      >
                        {`${productsCounter} modeles`}
                      </p>
                    ) : (
                      <p>
                        {`There are no ${title.toLowerCase()} yet`}
                      </p>
                    )}

                  <div className={styles.productsPage__filter}>
                    <label
                      htmlFor="sort-by"
                      className={classNames(styles.productsPage__label, {
                        [styles.productsPage__label__DARK]: isDarkTheme,
                      })}
                    >
                      Sort by
                    </label>
                    <select
                      name="sort-by"
                      id="sort-by"
                      className={classNames(styles.productsPage__dropdown, {
                        [styles.productsPage__dropdown__DARK]: isDarkTheme,
                      })}
                      onChange={(event) => onSortChange(event
                        .target.value as SortBy)}
                    >
                      {Object.entries(SORT_TYPES).map(([param, text]) => (
                        <option
                          value={param}
                          className={classNames(styles.productsPage__option, {
                            [styles.productsPage__option__DARK]: isDarkTheme,
                          })}
                          selected={param === sort}
                        >
                          {text}
                        </option>
                      ))}
                    </select>

                    <label
                      htmlFor="per-page"
                      className={styles.productsPage__label}
                    >
                      Items on page
                    </label>
                    <select
                      name="per-page"
                      id="per-page"
                      className={styles.productsPage__dropdown}
                      onChange={(event) => onPerPageChange(event.target.value)}
                    >
                      <option
                        value="all"
                        className={classNames(styles.productsPage__option, {
                          [styles.productsPage__option__DARK]: isDarkTheme,
                        })}
                        selected={perPage === 'all'}
                      >
                        All
                      </option>

                      {PER_PAGE.map(amount => (
                        <option
                          value={amount}
                          className={classNames(styles.productsPage__option, {
                            [styles.productsPage__option__DARK]: isDarkTheme,
                          })}
                          selected={amount === perPage}
                        >
                          {amount}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.productsPage__phonesList}>
                    {sortedProducts.map((phone) => (
                      <div className={styles.productsPage__phoneItem}>
                        <PhoneCard phoneItem={phone} key={phone.id} />
                      </div>
                    ))}
                  </div>

                  {showPagination()}
                </>
              )}
          </>
        )}
    </div>
  );
};
