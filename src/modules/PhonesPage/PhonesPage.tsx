import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import styles from './PhonesPage.module.scss';
import { useAppSelector } from '../../store/hooks';
import { PhoneCard } from '../shared/components/PhoneCard';
import { Pagination } from '../shared/components/Pagination';
import { getSortedProducts } from '../../utils/getSortedProducts';
import { Phone } from '../../types/Phone';
import { SortBy } from '../../types/SortBy';
import { Filtration } from '../shared/Filtration/Filtration';
// import { getPhonesWithSearchParams } from '../../api/service';

type Props = {
  title: string
  loadData: (
    perPage: string,
    page: number,
    sort?: SortBy,
  ) => Promise<Phone[]>,
};

export const ProductsPage: React.FC<Props> = ({
  title,
  loadData,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [products, setProducts] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string>('');
  const sort = searchParams.get('sort');
  const perPage = searchParams.get('perPage');
  const page = searchParams.get('page');

  const perPageString: string = perPage || 'All';
  const currentPageNumber: number = page !== null
    ? parseInt(page, 10) || 1
    : 1;
  const sortByEnum: SortBy = sort ? (sort as SortBy) : SortBy.Newest;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const availibleProducts = await loadData(
          perPageString,
          currentPageNumber,
          sortByEnum,
        );

        setProducts(availibleProducts);
      } catch {
        setError('Something went wrong. Try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line max-len
  }, [sortByEnum, perPageString, currentPageNumber, error, loadData]);

  const sortedProducts = getSortedProducts(products, searchParams);
  const productsCounter = sortedProducts.length;
  const totalPages = Math.floor(productsCounter / Number(perPage));

  const showPagination = () => {
    if (perPage === 'All') {
      return false;
    }

    if (productsCounter < Number(perPage)) {
      return false;
    }

    // return (
    //   <h1>Home page</h1>
    // );

    return (
      <Pagination
        totalPages={totalPages}
        currentPage={currentPageNumber}
      />
    );
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

      {isLoading && (
        <div className="Loader">Loader</div>
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
            <Filtration sort={sortByEnum} perPage={perPageString} />
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
    </div>
  );
};
