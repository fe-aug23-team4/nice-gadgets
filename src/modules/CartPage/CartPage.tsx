import React, { useEffect, useState, useMemo } from 'react';
import cn from 'classnames';
import { CartItem } from './CartItem';
import { Phone } from '../../types/Phone';
import { getNewestPhones } from '../../api/service';
import styles from './CartPage.module.scss';
import { useAppSelector } from '../../store/hooks';
import { Breadcrumbs } from '../shared/Breadcrumbs';

export const CartPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[] | []>([]);
  const { isDarkTheme } = useAppSelector(state => state.theme);

  const total = useMemo(() => {
    return phones.reduce((accumulator, phone) => accumulator + phone.price, 0);
  }, [phones]);

  useEffect(() => {
    getNewestPhones()
      .then(setPhones)
      // eslint-disable-next-line
      .catch((error) => console.error('Error fetching data:', error))
  }, []);

  return (
    <section
      className={cn(styles.cart, {
        [styles.cart__DARK]: isDarkTheme,
      })}
    >
      <Breadcrumbs />
      {/* if I undestood your comment in a right way */}

      <h2
        className={cn(styles.title, {
          [styles.contentDark]: isDarkTheme,
        })}
      >
        Cart
      </h2>

      <div className={styles.gridContainer}>
        <div className={styles.cardsContainer}>
          {phones.map((phone) => (
            <CartItem key={phone.id} phone={phone} />
          ))}
        </div>

        <div
          className={cn(styles.amountContainer, {
            [styles.amountContainer__DARK]: isDarkTheme,
          })}
        >
          <p
            className={cn(styles.totalAmount, {
              [styles.contentDark]: isDarkTheme,
            })}
          >
            {`$ ${total}`}
          </p>

          <p
            className={cn(styles.amountContent, {
              [styles.amountContent__DARK]: isDarkTheme,
            })}
          >
            {`Total for ${phones.length} items`}
          </p>

          <p
            className={cn(styles.line, {
              [styles.line__DARK]: isDarkTheme,
            })}
          />

          <button
            type="button"
            // className={styles.button}
            className={cn(styles.button, {
              [styles.button__DARK]: isDarkTheme,
            })}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>

  );
};
