import React, { useEffect, useState } from 'react';

import styles from './ProductDetailsPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
import { ProductDetailsSlider } from './components/ProductDetailsSlider';
import { PhoneDetail } from '../../types/PhoneDetail';
import { getPhoneDetail } from '../../api/service';
// import { ProductSlider } from '../shared/ProductSlider';

export const ProductDetailsPage: React.FC = () => {
  const [phoneDetails, setPhoneDetails] = useState<PhoneDetail | null>(null);

  useEffect(() => {
    getPhoneDetail('apple-iphone-7-32gb-black')
      .then(setPhoneDetails);
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumbs />

      <BackButton />

      <h2>Name of Product</h2>

      <article>
        <ProductDetailsSlider images={phoneDetails?.images} />
      </article>

      {/* <ProductSlider  /> */}
    </div>
  );
};
