/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  ReactComponent as NextIcon,
} from '../../../static/icons/arrow-right_icon.svg';
import styles from './ProductSlider.module.scss';
import {
  chooseArrowColor, chooseBackgroundColor, chooseIconColor,
} from './colorHandlers';
import { useAppSelector } from '../../../store/hooks';

type Props = {
  handleClick: () => void;
  style?: Record<string, string>
  currentSlide: number;
  maxSlides: number;
};

export const SampleNextArrow: React.FC<Props> = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  const {
    style, onClick, handleClick, currentSlide, maxSlides,
  } = props;
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const isNotDisabled = currentSlide < maxSlides;

  return (
    <button
      type="button"
      className={styles['slick-next-small']}
      style={{
        ...style,
        background: chooseBackgroundColor(
          isHover, isNotDisabled, isDarkTheme,
        ),
        borderColor: chooseArrowColor(
          isHover, isNotDisabled, isDarkTheme,
        ),
        cursor: isNotDisabled ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        if (currentSlide < maxSlides) {
          onClick();
          handleClick();
        }
      }}
      aria-label="sampleNextArrow"
      disabled={!isNotDisabled}
    >
      <NextIcon
        className={styles.icon}
        color={chooseIconColor(isDarkTheme, isNotDisabled)}
      />
    </button>
  );
};
