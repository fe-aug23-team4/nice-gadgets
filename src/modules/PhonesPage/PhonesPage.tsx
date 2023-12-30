import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import styles from './PhonesPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { ProductList } from '../shared/ProductList';
import { getProductsWithSearchParams } from '../../api/service';
import { Loader } from '../shared/Loader';
import { Pagination } from '../shared/Pagination';
import { Filtration } from '../shared/Filtration';
import { EndPoints } from '../../types/Enums';
import { Product, QueryParams } from '../../types/Product';
import { useAppSelector } from '../../store/hooks';
import { getSearchWith } from '../../helpers/getSearchWith';

type Props = {
  title: string;
  loadData: (EndPoint: EndPoints, params?: QueryParams) => Promise<Product[]>;
  productAmount?: number;
  endpoint: EndPoints;
};

export const ProductsPage: React.FC<Props> = ({
  title,
  loadData,
  productAmount,
  endpoint,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort');
  const page = searchParams.get('page');
  const perPage = searchParams.get('perPage');
  const order = searchParams.get('order');

  useEffect(() => {
    if (searchParams.toString() === '') {
      getSearchWith(searchParams, {
        page: '1',
        perPage: '16',
        sort: 'discount',
        order: 'asc',
      });
    }
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    const params: QueryParams = {
      page: page || '1',
      perPage: perPage || '16',
      sort: sort || 'discount',
      order: order || 'asc',
    };

    getProductsWithSearchParams(endpoint, params)
      .then(setProducts)
      .finally(() => setIsLoading(false));
  }, [page, perPage, sort, order, loadData, searchParams, endpoint]);

  useEffect(() => {
    if (productAmount !== undefined) {
      setTotalAmount(productAmount);
    }
  }, [productAmount]);

  const totalPages = perPage
    ? Math.ceil(totalAmount / Number(perPage))
    : Math.ceil(totalAmount / 16);

  const showPagination = () => {
    if (Number(perPage) === totalAmount) {
      return false;
    }

    if (totalAmount < Number(perPage)) {
      return false;
    }

    return <Pagination totalPages={totalPages} currentPage={page || '1'} />;
  };

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

      {!isLoading && error && (
        <>
          <p
            className={classNames(styles.productsPage__label, {
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

      {!error && (
        <>
          <p
            className={classNames([styles.productsPage__counter], {
              [styles.productsPage__counter__DARK]: isDarkTheme,
            })}
          >
            {totalAmount
              ? `${totalAmount} models`
              : `There are no ${title.toLowerCase()} yet`}
          </p>

          <div className={styles.productsPage__filter}>
            <Filtration
              totalPhones={totalAmount}
              sort={sort || ''}
              order={order || 'asc'}
              perPage={perPage || '16'}
            />
          </div>

          {isLoading && <Loader />}

          {!isLoading && !error && (
            <div className={styles.productsPage__phonesList}>
              <ProductList phones={products} />
            </div>
          )}

          <div className={styles.productsPage__pagination}>
            {showPagination()}
          </div>
        </>
      )}
    </div>
  );
};
