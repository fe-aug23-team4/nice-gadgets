import React from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { actions as cartActions } from '../../../../store/reducers/cartSlice';
import styles from './Modal.module.scss';
import smile from './img/thinking-smile.png';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  if (!isOpen) {
    return null;
  }

  const clearCartHandler = () => {
    dispatch(cartActions.clear());
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div
        className={cn(styles.content, {
          [styles.content__DARK]: isDarkTheme,
        })}
      >
        <p>Would you like to place an order?</p>
        <img
          src={smile}
          alt="thinking-smile"
          className={styles.smile}
        />
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            className={cn(styles.modalButton, {
              [styles.modalButton__DARK]: isDarkTheme,
            })}
            onClick={() => clearCartHandler()}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={onClose}
            className={cn(styles.modalButton, {
              [styles.modalButton__DARK]: isDarkTheme,
            })}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
