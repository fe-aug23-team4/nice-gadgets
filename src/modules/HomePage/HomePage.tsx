import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './HomePage.module.scss';

import { ShopByCategory } from './componets/ShopByCategory';
import { MainTitle } from './componets/MainTitle';
import { MainSlider } from './componets/MainSlider';
import { ProductSlider } from '../shared/ProductSlider/ProductSlider';
import { useAppSelector } from '../../store/hooks';
import { getNewestProducts, getProductsWithDiscount } from '../../api/service';
import { Product } from '../../types/Product';
import { Loader } from '../shared/Loader';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Product[]>([]);
  const [phonesWithDiscount, setPhonesWithDiscount] = useState<Product[]>([]);
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  useEffect(() => {
    getNewestProducts().then(setNewPhones);

    getProductsWithDiscount().then(setPhonesWithDiscount);
  }, []);

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

      {!newPhones.length
        ? (
          <Loader />
        ) : (
          <ProductSlider
            title="Brand new models"
            phones={newPhones}
          />
        )}

      <ShopByCategory />

      {!phonesWithDiscount.length ? (
        <Loader />
      ) : (
        <ProductSlider
          title="Hot prices"
          phones={phonesWithDiscount}
        />
      )}

    </>
  );
};
