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
          color={isDarkTheme ? '#f1f2f9' : '#0f0f11'}
        />
      </button>
    </>
  );
};
