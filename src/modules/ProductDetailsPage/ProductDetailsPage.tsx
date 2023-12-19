import React from 'react';

// import styles from './ProductDetailsPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
import { ProductDetailsSlider } from './components/ProductDetailsSlider';
// import { ProductSlider } from '../shared/ProductSlider';

export const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <Breadcrumbs />

      <BackButton />

      <h2>Name of Product</h2>

      <article>
        <ProductDetailsSlider />
      </article>

      {/* <ProductSlider  /> */}
    </>
  );
};
