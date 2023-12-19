import React from 'react';

import styles from './ProductDetailsPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
// import { ProductDetailsSlider } from './components/ProductDetailsSlider';
import { ProductAbout }
  from './components/ProductDetailsSlider/ProductAbout/ProductAbout';
import { ProductTechspec }
  from './components/ProductDetailsSlider/ProductTechspec/ProductTechspec';
// import { ProductSlider } from '../shared/ProductSlider';

export const ProductDetailsPage: React.FC = () => {
  return (
    <div className={styles.productDetails}>
      <Breadcrumbs />

      <BackButton />

      <h2 className={styles.productDetails__title}>Name of Product</h2>

      {/* <article>
        <ProductDetailsSlider />
      </article> */}

      <ProductAbout />

      <ProductTechspec />

      {/* <ProductSlider  /> */}
    </div>
  );
};
