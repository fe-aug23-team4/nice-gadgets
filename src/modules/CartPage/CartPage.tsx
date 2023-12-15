import './CartPage.module.scss';

import React, { useEffect, useState } from 'react';
import { CartItem } from './CartItem';
import { Phone } from '../../types/Phone';
import { getNewestPhones } from '../../api/service';

export const CartPage: React.FC = () => {
  const [phone, setPhone] = useState<Phone | null>(null);

  useEffect(() => {
    getNewestPhones()
      .then(phones => setPhone(phones[0]))
      // eslint-disable-next-line
      .catch((error) => console.error('Error fetching data:', error))
  }, []);

  return (
    <CartItem
      phone={phone}
    />
  );
};
