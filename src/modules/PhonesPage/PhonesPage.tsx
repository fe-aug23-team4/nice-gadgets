import React, { useEffect, useState } from 'react';

// import styles from './PhonesPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { ProductList } from '../shared/ProductList';
import { getProductsWithSearchParams } from '../../api/service';
import { Loader } from '../shared/Loader';
import { Pagination } from '../shared/Pagination';
import { Filtration } from '../shared/Filtration';
import { EndPoints } from '../../types/Enums';
import { Product } from '../../types/Product';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsWithSearchParams(EndPoints.Phones)
      .then(setPhones)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Breadcrumbs />

      <h2>Mobile phones</h2>
      <p>N models</p>

      <Filtration />

      {isLoading ? (
        <Loader />
      ) : (
        <ProductList phones={phones} />
      )}

      <Pagination />
    </>
  );
};
