/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    // pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // adaptiveHeight: true,
    // centerMode: false,
    // centerPadding: '10px',
    // responsive: [
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //     },
    //   },
    // ],
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{title}</h3>
      <Slider
        {...settings}
        className={cn(styles['slider-card'], styles['slick-list-card'], {
          [styles.slider__dark]: isDarkTheme,
        })}
      >
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </Slider>
    </div>
  );
};
