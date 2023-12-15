import React from 'react';
import styles from './MainTitle.module.scss';

export const MainTitle: React.FC = () => (
  <h1 className={`page__title ${styles.mainTitle}`}>Product Catalog</h1>
);
