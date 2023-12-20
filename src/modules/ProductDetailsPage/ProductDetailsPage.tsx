import React, { useEffect, useState } from 'react';

import styles from './ProductDetailsPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
import { ProductDetailsSlider } from './components/ProductDetailsSlider';
import { PhoneDetail } from '../../types/PhoneDetail';
import { getProductDetail } from '../../api/service';
import { EndPoints } from '../../types/Enums';
// import { ProductSlider } from '../shared/ProductSlider';

export const ProductDetailsPage: React.FC = () => {
  const [phoneDetails, setPhoneDetails] = useState<PhoneDetail | null>(null);

  useEffect(() => {
    getProductDetail(EndPoints.Phones, 'apple-iphone-7-32gb-black')
      .then(setPhoneDetails);
  }, []);

  return (
    <div className={styles.container}>
      <article className={styles.breadcrumbs}>
        <Breadcrumbs />
      </article>

      <article className={styles.backButton}>
        <BackButton />
      </article>

      <h2>Name of Product</h2>

      <article className={styles['slider-container']}>
        <ProductDetailsSlider images={phoneDetails?.images} />
      </article>

      {/* <ProductSlider  /> */}
    </div>
  );
};
