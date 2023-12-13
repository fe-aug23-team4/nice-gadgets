import React, { useEffect, useState } from 'react';
import { PhoneCard } from '../shared/components/PhoneCard';
import { Phone } from '../../types/Phone';
import { getPhones } from '../../api/service';
// import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>();

  useEffect(() => {
    getPhones().then(setPhones);
  }, []);

  return !!phones?.length && <PhoneCard phone={phones[0]} />;
};
