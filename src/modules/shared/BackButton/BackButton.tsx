import React from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector } from '../../../store/hooks';
import { ReactComponent as ArrowLeft }
  from '../../../static/icons/arrow-left_icon.svg';
import styles from './BackButton.module.scss';

export const BackButton: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleBackClick}
      className={styles.backButtonContainer}
    >
      <ArrowLeft
        color={isDarkTheme ? '#f1f2f9' : '#0f0f11'}
      />
      <p
        className={cn(styles.backButtonText, {
          [styles.backButtonText__DARK]: isDarkTheme,
        })}
      >
        Back
      </p>
    </button>
  );
};
