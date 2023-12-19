import React from 'react';
import cn from 'classnames';

import { ProductCard } from '../ProductCard';
import { Product } from '../../../types/Product';
import styles from './ProductSlider.module.scss';

type Props = {
  phone: Product;
};

export const SlideCard: React.FC<Props> = ({ phone, ...prop }) => {
  return (
    <div
      {...prop}
      className={cn(
        styles['slider-card'],
        styles['slick-slide-card'],
        styles['slick-clone-card'],
      )}
    >
      <ProductCard phone={phone} />
    </div>
  );
};
