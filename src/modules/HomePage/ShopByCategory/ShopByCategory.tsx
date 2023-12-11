import './ShopByCategory.module.scss';
import React from 'react';

export const ShopByCategory: React.FC = () => {
  return (
    <div>
      <h2>Shop by category</h2>
      <article>
        <h3>Mobile phones</h3>
        <p>95 models</p>
      </article>
      <article>
        <h3>Tablets</h3>
        <p>24 models</p>
      </article>
      <article>
        <h3>Accessories</h3>
        <p>100 models</p>
      </article>
    </div>
  );
};
