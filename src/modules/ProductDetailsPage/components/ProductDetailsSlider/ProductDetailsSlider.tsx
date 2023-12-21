/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
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

const DEFAULT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png';

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
            onError={(e) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              e.target.src = DEFAULT_IMAGE;
            }}
            alt={images?.[i]}
            className={styles['slick-dots']}
          />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    nextArrow: (
      <NextArrow />
    ),
    prevArrow: (
      <PrevArrow />
    ),
    swipeToSlide: false,
    vertical: true,
    verticalSwiping: false,
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
        breakpoint: 639.5,
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
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: isDarkTheme ? '#0f1121' : '#fafbfc' }}
      id="phoneImagesSlider"
      // className={styles['slider-container']}
    >
      <Slider
        {...settings}
        className={styles['vertical-dots']}
      >
        {images?.map(image => (
          <div
            key={image}
            className={styles.phonePhoto}
          >
            <img
              src={image}
              alt={image}
              className={styles.phonePhoto}
              onError={(e) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                e.target.src = DEFAULT_IMAGE;
              }}
            />
          </div>

        ))}
      </Slider>
    </div>
  );
};
