import React from 'react';

// import styles from './HomePage.module.scss';

import { ShopByCategory } from './componets/ShopByCategory';
import { MainTitle } from './componets/MainTitle';
import { MainSlider } from './componets/MainSlider';
import { ProductSlider } from '../shared/ProductSlider';

export const HomePage: React.FC = () => {
  return (
    <>
      <MainTitle />

      <h2>Welcome to Nice Gadgets store!</h2>

      <MainSlider />

      <ProductSlider />

      <ShopByCategory />

      <ProductSlider />
    </>
  );
};
