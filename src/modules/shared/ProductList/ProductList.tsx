import React from 'react';

import styles from './ProductList.module.scss';

import { Phone } from '../../../types/Phone';
import { PhoneCard } from '../PhoneCard';

type Props = {
  phones: Phone[];
};

export const ProductList: React.FC<Props> = ({ phones }) => {
  return (
    <div className={styles.gridContainer}>
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </div>
  );
};
