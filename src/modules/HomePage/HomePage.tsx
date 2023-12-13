import React, { useEffect, useState } from 'react';

import { ShopByCategory } from './ShopByCategory';
import { SliderWithPhones } from '../shared/components/SliderWithPhones';
import { Phone } from '../../types/Phone';
import { getNewestPhones } from '../../api/service';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getNewestPhones()
      .then(setNewPhones);
  }, []);

  return (
    <>
      <ShopByCategory />
      <SliderWithPhones
        phones={newPhones}
        title="Brand new models"
      />
    </>
  );
};
