import React from 'react';
import cn from 'classnames';
import styles from './AddToCart.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actions as cartActions } from '../../../store/reducers/cartSlice';
import { Phone } from '../../../types/Phone';

type Props = {
  productItem: Phone;
};

export const AddToCart: React.FC<Props> = ({ productItem }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const isItemSelected = cart
    .findIndex(cartItem => cartItem.id === productItem.id);

  const handleAddToCart = (product: Phone) => {
    if (isItemSelected < 0) {
      dispatch(cartActions.add(product));
    }
  };

  return (
    <button
      className={cn(styles.addToCart, {
        [styles.addToCart__DARK]: isDarkTheme,
        [styles.addToCart__SELECTED]: isItemSelected > 0,
        [styles.addToCart__DARK__SELECTED]:
          isItemSelected > 0 && isDarkTheme,
      })}
      type="button"
      onClick={() => handleAddToCart(productItem)}
    >
      {isItemSelected ? 'Added' : 'Add to cart'}
    </button>
  );
};
