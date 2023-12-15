import React, { useEffect, useState, useMemo } from 'react';
import cn from 'classnames';
import { CartItem } from './CartItem';
import { Phone } from '../../types/Phone';
import { getNewestPhones } from '../../api/service';
import styles from './CartPage.module.scss';
import { useAppSelector } from '../../store/hooks';

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
      // className={styles.cart}
      className={cn(styles.cart, {
        [styles.cart__DARK]: isDarkTheme,
      })}
    >
      <div
        // className={styles.breadcrums}
        className={cn(styles.breadcrums, {
          [styles.contentDark]: isDarkTheme,
        })}
      >
        Breadcrums
      </div>

      <h2
        // className={styles.title}
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

        <div className={styles.amountContainer}>
          <p
            // className={styles.totalAmount}
            className={cn(styles.totalAmount, {
              [styles.contentDark]: isDarkTheme,
            })}
          >
            {`$ ${total}`}
          </p>

          <p
            // className={styles.amountContent}
            className={cn(styles.amountContent, {
              [styles.amountContent__DARK]: isDarkTheme,
            })}
          >
            {`Total for ${phones.length} items`}
          </p>

          <p className={styles.line} />

          <button type="button">
            Checkout
          </button>
        </div>
      </div>
    </section>

  );
};
