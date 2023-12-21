/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';
import styles from './ProductSlider.module.scss';
import './slick.scss';
import { SampleNextArrow } from './SampleNextArrow';
import { SamplePrevArrow } from './SamplePrevArrow';
import { useAppSelector } from '../../../store/hooks';
import { Product } from '../../../types/Product';
import { SlideCard } from './SlideCard';

type Props = {
  title: string;
  products: Product[];
};

export const ProductSlider: React.FC<Props> = ({ title, products }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    variablewidth: true,
    draggable: true,
    nextArrow: (
      <SampleNextArrow
        handleClick={() => {
          setCurrentSlide((current) => current + 1);
        }}
        currentSlide={currentSlide}
        maxSlides={products.length - 4}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        handleClick={() => {
          setCurrentSlide((current) => current - 1);
        }}
        currentSlide={currentSlide}
      />
    ),
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1.25,
          centerMode: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1.15,
          centerMode: false,
        },
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1.1,
          centerMode: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 0.8,
          centerMode: false,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0.9,
          centerMode: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1.1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 0.9,
          centerMode: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div>
        <ul className={styles['slick-dots-product']}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div
      id="phonesSlider"
    >
      <h3
        className={cn(styles.header, {
          [styles.header__DARK]: isDarkTheme,
        })}
      >
        {title}
      </h3>
      <Slider
        className={cn(
          styles['slider-card'],
          styles['slick-list-card'],
          styles['slick-track-product'],
          styles['slick-list-product'],
          {
            [styles.slider__dark]: isDarkTheme,
          },
        )}
        {...settings}
      >
        {products.map((product) => (
          <SlideCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};
