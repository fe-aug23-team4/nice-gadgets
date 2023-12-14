import React, { useEffect, useState } from 'react';

// import styles from './HomePage.module.scss';

import { ShopByCategory } from './componets/ShopByCategory';
import { MainTitle } from './componets/MainTitle';
import { MainSlider } from './componets/MainSlider';
import { ProductSlider } from '../shared/ProductSlider';
import { Phone } from '../../types/Phone';
import { getNewestPhones, getPhonesWithDiscount } from '../../api/service';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [phonesWithDiscount, setPhonesWithDiscount] = useState<Phone[]>([]);

  useEffect(() => {
    getNewestPhones()
      .then(setNewPhones);

    getPhonesWithDiscount()
      .then(setPhonesWithDiscount);
  }, []);

  return (
    <>
      <MainTitle />

      <h2>Welcome to Nice Gadgets store!</h2>

      <MainSlider />

      <ProductSlider
        title="Brand new models"
        phones={newPhones}
      />

      <ShopByCategory />

      <ProductSlider
        title="Hot prices"
        phones={phonesWithDiscount}
      />
    </>
  );
};
