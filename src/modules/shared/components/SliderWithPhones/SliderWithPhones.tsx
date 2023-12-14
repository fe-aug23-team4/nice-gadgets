/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import Slider from 'react-slick';
import cn from 'classnames';

import './slick.scss';
import './slick-theme.scss';

// import { bannersData } from '../../../../static/banners/bannersData';
import style from './SliderWithPhones.module.scss';
import { useAppSelector } from '../../../../store/hooks';
import { Phone } from '../../../../types/Phone';
import { PhoneCard } from '../../PhoneCard/PhoneCard';

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

type Props = {
  phones: Phone[],
  title: string,
};

export const SliderWithPhones: React.FC<Props> = ({ phones, title }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
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
        {title}
      </h1>
      <Slider
        {...settings}
        className={cn(style.slider, {
          [style.slider__dark]: isDarkTheme,
        })}
      >
        {phones.map(phone => (
          <PhoneCard
            key={phone.id}
            phone={phone}
          />
        ))}
      </Slider>
    </div>
  );
};
