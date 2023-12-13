/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import Slider from 'react-slick';
import cn from 'classnames';

import './slick.scss';
import './slick-theme.scss';

import { bannersData } from '../../../../static/banners/bannersData';
import style from './SliderWithPromo.module.scss';
import { useAppSelector } from '../../../../store/hooks';

function SampleNextArrow(props: any) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={-1}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={-1}
    />
  );
}

export const SliderWithPromo: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
  };

  const { isDarkTheme } = useAppSelector((state) => state.theme);

  return (
    <div className={style.container}>
      <h1 className={cn(style.header, {
        [style.header__dark]: isDarkTheme,
      })}
      >
        Welcome to Nice Gadgets store!
      </h1>
      <Slider
        {...settings}
        className={cn(style.slider, {
          [style.slider__dark]: isDarkTheme,
        })}
      >
        {bannersData.map(banner => (
          <div key={banner.id}>
            <img
              src={process.env.PUBLIC_URL + banner.photo}
              alt={banner.title}
              className={style.sliderPhoto}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
