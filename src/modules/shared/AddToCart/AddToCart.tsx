import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './AddToCart.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actions as cartActions } from '../../../store/reducers/cartSlice';
import { Product } from '../../../types/Product';

type Props = {
  productItem: Product;
};

export const AddToCart: React.FC<Props> = ({ productItem }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [isSelected, setIsSelected] = useState<boolean>(
    !!cart.find(cartItem => cartItem.id === productItem.id),
  );

  const handleAddToCart = (product: Product) => {
    if (!isSelected) {
      dispatch(cartActions.add(product));
      setIsSelected(true);
    } else {
      navigate('/cart');
    }
  };

  return (
    <button
      className={cn(styles.addToCart, {
        [styles.addToCart__DARK]: isDarkTheme,
        [styles.addToCart__SELECTED]: isSelected,
        [styles.addToCart__DARK__SELECTED]:
        isSelected && isDarkTheme,
      })}
      type="button"
      onClick={() => handleAddToCart(productItem)}
    >
      {isSelected ? 'Added' : 'Add to cart'}
    </button>
  );
};
