import React, { useEffect, useState } from 'react';

// import styles from './PhonesPage.module.scss';

import { Phone } from '../../types/Phone';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { ProductList } from '../shared/ProductList';
import { getPhones } from '../../api/service';
import { Loader } from '../shared/Loader';
import { Pagination } from '../shared/Pagination';
import { Filtration } from '../shared/Filtration';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPhones()
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
