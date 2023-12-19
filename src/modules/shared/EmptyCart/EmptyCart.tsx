import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';
import { useAppSelector } from '../../../store/hooks';
import cart_icon from '../../../static/icons/cart_icon.svg';

export const EmptyCart: React.FC = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);

  return (
    <div className={styles.container}>
      <img
        src={cart_icon}
        alt="cart_icon"
        className={cn([styles.cart_icon], {
          [styles.cart_icon_dark]: isDarkTheme,
        })}
      />
      <p className={cn([styles.headline], {
        [styles.headline_dark]: isDarkTheme,
      })}
      >
        Your cart is empty
      </p>
      <h2 className={cn([styles.subtitle], {
        [styles.subtitle_dark]: isDarkTheme,
      })}
      >
        You can add an item to your cart by clicking Add to cart button
      </h2>
      <Link
        to="/phones"
        className={cn([styles.button], {
          [styles.button_dark]: isDarkTheme,
        })}
      >
        Explore the catalog
      </Link>
    </div>
  );
};
