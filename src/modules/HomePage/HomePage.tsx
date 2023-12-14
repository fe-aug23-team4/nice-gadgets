import React, { useEffect, useState } from 'react';

// import styles from './HomePage.module.scss';

import { ShopByCategory } from './componets/ShopByCategory';
import { MainTitle } from './componets/MainTitle';
import { MainSlider } from './componets/MainSlider';
import { ProductSlider } from '../shared/ProductSlider';
import { Phone } from '../../types/Phone';
import { getNewestPhones } from '../../api/service';

export const HomePage: React.FC = () => {
  const [,setNewPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getNewestPhones()
      .then(setNewPhones);
  }, []);

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
