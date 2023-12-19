import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styles from './ProductDetailsPage.module.scss';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
import { ProductDetailsSlider } from './components/ProductDetailsSlider';
import { getProductDetail } from '../../api/service';
import { EndPoints } from '../../types/Enums';
import { ColorCapacityComponent } from './components/ColorCapacityComponent';
import { Detail } from '../../types/Detail';

export const ProductDetailsPage: React.FC = () => {
  const [phoneDetails, setPhoneDetails] = useState<Detail | null>(null);
  const [color, setColor] = useState('');
  const [capacity, setCapacity] = useState('');
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');

  const currentPhone = (segments[segments.length - 1]);

  useEffect(() => {
    getProductDetail(EndPoints.Phones, currentPhone)
      .then(setPhoneDetails);
  }, [currentPhone]);

  const getPhone = (col: string, cap: string) => {
    if (col && cap) {
      return phoneDetails?.additional.find(
        (phone) => phone.color === col && phone.capacity === cap,
      );
    }

    if (col) {
      return phoneDetails?.additional.find((phone) => phone.color === col);
    }

    if (cap) {
      return phoneDetails?.additional.find((phone) => phone.capacity === cap);
    }

    return phoneDetails?.current;
  };

  const phone = getPhone(color, capacity);

  // useEffect(() => {
  //   getProductDetail(EndPoints.Phones, 'apple-iphone-7-32gb-black')
  //     .then(setPhoneDetails);
  // }, []);

  return (
    <div className={styles.container}>
      <Breadcrumbs />

      <BackButton />

      <h2>{phone?.name}</h2>

      <article>
        <ProductDetailsSlider images={phone?.images} />
      </article>

      <ColorCapacityComponent
        phoneDetails={phone || null}
        setColor={setColor}
        setCapacity={setCapacity}
      />

      {/* <ProductSlider  /> */}
    </div>
  );
};
