import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import { CartItem } from './components/CartItem';
import styles from './CartPage.module.scss';
import { useAppSelector } from '../../store/hooks';
import { BackButton } from '../shared/BackButton';
import { Modal } from './components/Modal';

export const CartPage: React.FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { cart } = useAppSelector(state => state.cart);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, phone) => acc + phone.price * phone.amount, 0);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((acc, phone) => acc + phone.amount, 0);
  }, [cart]);

  return (

    <section
      className={cn(styles.cart, {
        [styles.cart__DARK]: isDarkTheme,
      })}
    >
      <BackButton />
      <h2
        className={cn(styles.title, {
          [styles.contentDark]: isDarkTheme,
        })}
      >
        Cart
      </h2>

      <div className={styles.gridContainer}>
        <div className={styles.cardsContainer}>
          {cart.map((phone) => (
            <CartItem
              key={phone.id}
              phone={phone}
            />
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
            {`$ ${totalPrice}`}
          </p>

          <p
            className={cn(styles.amountContent, {
              [styles.amountContent__DARK]: isDarkTheme,
            })}
          >
            {`Total for ${totalItems} items`}
          </p>

          <p
            className={cn(styles.line, {
              [styles.line__DARK]: isDarkTheme,
            })}
          />

          <button
            type="button"
            className={cn(styles.button, {
              [styles.button__DARK]: isDarkTheme,
            })}
            onClick={openModal}
          >
            Checkout
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            cart={cart}
          />
        </div>
      </div>
    </section>
  );
};
