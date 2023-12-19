import React from 'react';

import styles from './ProductList.module.scss';

import { ProductCard } from '../ProductCard';
import { Product } from '../../../types/Product';

type Props = {
  phones: Product[];
};

export const ProductList: React.FC<Props> = ({ phones }) => {
  return (
    <div className={styles.gridContainer}>
      {phones.map((phone) => (
        <ProductCard key={phone.id} phone={phone} />
      ))}
    </div>
  );
};
