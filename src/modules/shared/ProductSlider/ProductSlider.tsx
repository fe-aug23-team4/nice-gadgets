/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';
import styles from './ProductSlider.module.scss';
import './slick.scss';
import './slick-theme.scss';
import { SampleNextArrow } from './SampleNextArrow';
import { SamplePrevArrow } from './SamplePrevArrow';
import { Phone } from '../../../types/Phone';
import { useAppSelector } from '../../../store/hooks';
import { PhoneCard } from '../PhoneCard';

type Props = {
  title: string,
  phones: Phone[],
};

export const ProductSlider: React.FC<Props> = ({ title, phones }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const ref = createRef<Slider>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 2,
    autoplay: false,
    // pauseOnHover: true,
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
    // adaptiveHeight: true,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{title}</h3>
      <Slider
        {...settings}
        className={cn(styles['slider-card'], styles['slick-list-card'], {
          [styles.slider__dark]: isDarkTheme,
        })}
        ref={ref}
      >
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </Slider>
    </div>
  );
};
