/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  ReactComponent as PrevIcon,
} from '../../../static/icons/arrow-left_icon.svg';
import styles from './ProductSlider.module.scss';
import { useAppSelector } from '../../../store/hooks';

// type Props = {
//   onClick: () => void;
//   style?: Record<string, string>
// };

export const SamplePrevArrow: React.FC = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  const {
    style, onClick, handleClick, currentSlide,
  } = props;
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const isNotDisabled = currentSlide > 0;
  let iconColor;

  switch (true) {
    case isDarkTheme:
      iconColor = '#f1f2f9';
      break;

    case isDarkTheme && !isNotDisabled:
      iconColor = '#4a4d58';
      break;

    case !isNotDisabled:
      iconColor = '#b4bdc3';
      break;

    default:
      iconColor = '#0f0f11';
  }

  return (
    <>
      <button
        type="button"
        className={styles['slick-prev-small']}
        style={isDarkTheme
          ? {
            ...style,
            background: isHover ? '#4a4d58' : '#323542',
            border: 'none',
          }
          : { ...style }}
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
          color={iconColor}
        />
      </button>
    </>
  );
};
