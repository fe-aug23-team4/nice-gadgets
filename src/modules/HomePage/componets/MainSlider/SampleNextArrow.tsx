/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  ReactComponent as NextIcon,
} from '../../../../static/icons/arrow-right_icon.svg';
import { useAppSelector } from '../../../../store/hooks';

export const SampleNextArrow: React.FC = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  const { className, style, onClick } = props;
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  return (
    <>
      <button
        type="button"
        className={className}
        style={isDarkTheme
          ? {
            ...style,
            background: isHover ? '#4a4d58' : '#323542',
            border: 'none',
          }
          : { ...style }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        aria-label="sampleNextArrow"
      >
        <NextIcon color={isDarkTheme ? '#f1f2f9' : '#0f0f11'} />
      </button>
    </>
  );
};
