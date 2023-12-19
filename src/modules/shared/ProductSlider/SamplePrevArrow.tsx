/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  ReactComponent as PrevIcon,
} from '../../../static/icons/arrow-left_icon.svg';
import styles from './ProductSlider.module.scss';
import {
  chooseArrowColor, chooseBackgroundColor, chooseIconColor,
} from './colorHandlers';
import { useAppSelector } from '../../../store/hooks';

type Props = {
  handleClick: () => void;
  currentSlide: number;
};

export const SamplePrevArrow: React.FC<Props> = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  const {
    style, onClick, handleClick, currentSlide,
  } = props;
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  // const isDarkTheme = true;
  const isNotDisabled = currentSlide > 0;

  return (
    <>
      <button
        type="button"
        className={styles['slick-prev-small']}
        style={{
          ...style,
          background: chooseBackgroundColor(
            isHover, isNotDisabled, isDarkTheme,
          ),
          borderColor: chooseArrowColor(
            isHover, isNotDisabled, isDarkTheme,
          ),
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => {
          if (currentSlide > 0) {
            onClick();
            handleClick();
          }
        }}
        aria-label="samplePrevArrow"
      >
        <PrevIcon
          className={styles.icon}
          color={chooseIconColor(isDarkTheme, isNotDisabled)}
        />
      </button>
    </>
  );
};
