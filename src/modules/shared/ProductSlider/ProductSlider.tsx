/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';
import styles from './ProductSlider.module.scss';
import './slick.scss';
import { SampleNextArrow } from './SampleNextArrow';
import { SamplePrevArrow } from './SamplePrevArrow';
import { Phone } from '../../../types/Phone';
import { useAppSelector } from '../../../store/hooks';
import { SlideCard } from './SlideCard';

type Props = {
  title: string,
  phones: Phone[],
};

export const ProductSlider: React.FC<Props> = ({ title, phones }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow
      handleClick={() => {
        setCurrentSlide((current) => current + 1);
      }}
      currentSlide={currentSlide}
      maxSlides={phones.length - 4}
    />,
    prevArrow: <SamplePrevArrow
      handleClick={() => {
        setCurrentSlide((current) => current - 1);
      }}
      currentSlide={currentSlide}
    />,
    centerMode: false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
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
        <ul
          className={styles['slick-dots-product']}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div id="phonesSlider" className={styles.container}>
      <h3 className={styles.header}>{title}</h3>
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
        {phones.map(phone => (
          <SlideCard
            key={phone.id}
            phone={phone}
          />
        ))}
      </Slider>
    </div>
  );
};
