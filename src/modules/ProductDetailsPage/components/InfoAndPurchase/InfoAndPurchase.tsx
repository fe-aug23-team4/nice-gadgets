import React from 'react';
import cn from 'classnames';

import styles from './InfoAndPurchase.module.scss';

import { useAppSelector } from '../../../../store/hooks';
import { PreparedInfo, Product } from '../../../../types/Product';

import { AddToCart } from '../../../shared/AddToCart';
import { AddToFavourites } from '../../../shared/AddToFavourites';

type Props = {
  product: Product | null;
  info: PreparedInfo;
};

export const InfoAndPurchase: React.FC<Props> = ({ product, info }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { fullPrice, price, specs } = info; // eslint-disable-line object-curly-newline

  return (
    <div
      className={cn(styles.infoAndPurchase, {
        [styles.infoAndPurchase__DARK]: isDarkTheme,
      })}
    >
      <div className={styles.infoAndPurchase__price}>
        <p>{`$${price}`}</p>
        <p className={styles.infoAndPurchase__fullPrice}>{`$${fullPrice}`}</p>
      </div>

      <div className={styles.infoAndPurchase__buttons}>
        {product && (
          <>
            <AddToCart productItem={product} />
            <AddToFavourites productItem={product} />
          </>
        )}
      </div>

      <div className={styles.infoAndPurchase__specs}>
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className={styles.infoAndPurchase__spec}>
            <p
              className={cn(styles.infoAndPurchase__spec__title, {
                [styles.infoAndPurchase__spec__titleRAM]: key === 'ram',
              })}
            >
              {key}
            </p>
            <p className={styles.infoAndPurchase__spec__text}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
