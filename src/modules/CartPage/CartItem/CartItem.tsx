import React from 'react';
import { Phone } from '../../../types/Phone';
import styles from './CartItem.module.scss';

type Props = {
  phone: Phone | null,
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  return (
    <article className={styles.cartItem}>
      <button type="button">
        x
      </button>

      <img
        src={phone?.image}
        alt={phone?.name}
      />

      <h3>
        {phone?.name}
      </h3>

      <div>
        <button type="button">
          -
        </button>
        <p>
          1
        </p>
        <button type="button">
          +
        </button>
      </div>

      <p>
        {`$ ${phone?.price}`}
      </p>
    </article>
  );
};
