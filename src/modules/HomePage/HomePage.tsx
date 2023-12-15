import { useSearchParams } from 'react-router-dom';
import React from 'react';
import { ProductsPage } from '../PhonesPage';
import './HomePage.module.scss';
import { getPhonesWithSearchParams } from '../../api/service';
import { SortBy } from '../../types/SortBy';

const title = 'Mobiles phones';

export const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort') as SortBy | null;
  const perPage = searchParams.get('perPage');
  const page = searchParams.get('page');

  return (
    <ProductsPage
      title={title}
      sort={sort}
      perPage={perPage}
      page={page}
      getProductsWithSearchParams={getPhonesWithSearchParams}
    />
  );
};
