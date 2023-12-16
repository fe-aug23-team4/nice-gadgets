import React from 'react';
import cn from 'classnames';

import styles from './HomePage.module.scss';

import { ShopByCategory } from './componets/ShopByCategory';
import { MainTitle } from './componets/MainTitle';
import { MainSlider } from './componets/MainSlider';
import { ProductSlider } from '../shared/ProductSlider';
import { useAppSelector } from '../../store/hooks';

export const HomePage: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  return (
    <>
      <MainTitle />

      <h2
        className={cn(styles.title, {
          [styles.title__DARK]: isDarkTheme,
        })}
      >
        Welcome to Nice Gadgets store!
      </h2>

      <MainSlider />

      <ProductSlider />

      <ShopByCategory />

      <ProductSlider />
    </>
  );
};
