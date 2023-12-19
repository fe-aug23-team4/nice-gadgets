/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Slider from 'react-slick';

import styles from './ProductDetailsSlider.module.scss';
import { NextArrow, PrevArrow } from './Arrows';
import { useAppSelector } from '../../../../store/hooks';
import { getBorderColor } from './BorderColorHandler';

type Props = {
  images: string[] | undefined;
};

export const ProductDetailsSlider: React.FC<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  const settings = {
    customPaging: (i: number) => {
      return (
        <a
          key={images?.[i]}
          className={getBorderColor(i, currentSlide, isDarkTheme)}
        >
          <img
            src={images?.[i]}
            alt={images?.[i]}
            className={styles['slick-dots']}
            onClick={() => setCurrentSlide(i)}
            onKeyDown={() => setCurrentSlide(i)}
            role="presentation"
          />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow />
    ),
    prevArrow: (
      <PrevArrow />
    ),
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: isDarkTheme ? '#0f1121' : '#fafbfc' }}
      id="phoneImagesSlider"
    >
      <Slider
        {...settings}
        className={styles['vertical-dots']}
      >
        {images?.map(image => (
          <div
            className={styles.phonePhoto}
          >
            <img
              key={image}
              src={image}
              alt={image}
              className={styles.phonePhoto}
            />
          </div>

        ))}
      </Slider>
    </div>
  );
};
