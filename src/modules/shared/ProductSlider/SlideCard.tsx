import React from 'react';
import cn from 'classnames';

import { PhoneCard } from '../PhoneCard';
import { Phone } from '../../../types/Phone';
import styles from './ProductSlider.module.scss';

type Props = {
  phone: Phone,
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
      <PhoneCard phone={phone} />
    </div>
  );
};
