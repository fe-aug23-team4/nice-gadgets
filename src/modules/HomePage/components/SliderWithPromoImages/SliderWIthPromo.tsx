import React, { createRef, useEffect } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';

import './slick.scss';
import './slick-theme.scss';

import { bannersData } from '../../../../static/banners/bannersData';
import style from './SliderWithPromo.module.scss';
import { useAppSelector } from '../../../../store/hooks';
import { SampleNextArrow } from './SampleNextArrow';
import { SamplePrevArrow } from './SamplePrevArrow';

export const MainSlider: React.FC = () => {
  const ref = createRef<HTMLDivElement>();

  const { isDarkTheme } = useAppSelector((state) => state.theme);
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
    appendDots: (dots: any) => (
      <div
        ref={ref}
      >
        <ul>
          {dots}
        </ul>
      </div>
    ),
  };

  useEffect(() => {
    if (ref.current && isDarkTheme) {
      ref.current.className = 'slick-dots slick-dots__dark';
    }
  }, [ref, isDarkTheme]);

  return (
    <div className={style.container}>
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
