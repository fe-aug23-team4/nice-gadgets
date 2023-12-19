import React from 'react';
import cn from 'classnames';
import styles from './Loader.module.scss';
import { useAppSelector } from '../../../store/hooks';

export const Loader: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  return (
    <div className={styles.loader}>
      <div
        className={cn(styles.loader__content, {
          [styles.loader__content__DARK]: isDarkTheme,
        })}
      />
    </div>
  );
};
