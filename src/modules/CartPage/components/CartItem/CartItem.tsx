import React from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { actions as cartActions } from '../../../../store/reducers/cartSlice';
import { PhoneWithAmount } from '../../../../types/Phone';
import styles from './CartItem.module.scss';
import { ReactComponent as CloseIcon }
  from '../../../../static/icons/close_icon.svg';
import { ReactComponent as MinusIcon }
  from '../../../../static/icons/minus_icon.svg';
import { ReactComponent as PlusIcon }
  from '../../../../static/icons/plus_icon.svg';

type Props = {
  phone: PhoneWithAmount;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const getIconColor = (isTheme: boolean, isDisabled: boolean) => {
    if (isTheme) {
      return isDisabled ? '#4A4D58' : '#F1F2F9';
    }

    return isDisabled ? '#B4BDC3' : '#0F0F11';
  };

  const getClass = (isTheme: boolean, isDisabled: boolean) => {
    if (isTheme) {
      return isDisabled
        ? styles.changeAmountButton__DARK
        : styles.changeAmountButton__activeDARK;
    }

    return isDisabled ? {} : styles.changeAmountButton__ACTIVE;
  };

  return (
    <article
      className={cn(styles.cartItem, {
        [styles.cartItem__DARK]: isDarkTheme,
      })}
    >
      <div className={styles.top}>
        <button
          type="button"
          aria-label="Delete Item"
          className={styles.deleteButton}
          onClick={() => dispatch(cartActions.remove(phone.id))}
        >
          <CloseIcon color={isDarkTheme ? '#4A4D58' : '#B4BDC3'} />
        </button>

        <div className={styles.imgContainer}>
          <img
            src={phone.image}
            alt={phone.name}
            className={cn(styles.img, {
              [styles.img__DARK]: isDarkTheme,
            })}
          />
        </div>

        <p
          className={cn(styles.content, {
            [styles.darkContent]: isDarkTheme,
          })}
        >
          {phone?.name}
        </p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.changeAmount}>
          <button
            type="button"
            aria-label="Decrease Amount"
            className={cn(
              styles.changeAmountButton,
              getClass(isDarkTheme, phone.amount === 1),
            )}
            disabled={phone.amount === 1}
            onClick={() => dispatch(cartActions.decrease(phone.id || 0))}
          >
            <MinusIcon color={getIconColor(isDarkTheme, phone.amount === 1)} />
          </button>
          <p
            className={cn(styles.content, {
              [styles.darkContent]: isDarkTheme,
            })}
          >
            {phone?.amount}
          </p>
          <button
            type="button"
            aria-label="Increase Amount"
            className={cn(
              styles.changeAmountButton,
              styles.changeAmountButton__ACTIVE,
              {
                [styles.changeAmountButton__activeDARK]: isDarkTheme,
              },
            )}
            onClick={() => dispatch(cartActions.increase(phone.id))}
          >
            <PlusIcon color={isDarkTheme ? '#F1F2F9' : '#0F0F11'} />
          </button>
        </div>

        <p
          className={cn(styles.content, {
            [styles.darkContent]: isDarkTheme,
          })}
        >
          {phone ? `$ ${phone.price * phone.amount}` : ''}
        </p>
      </div>
    </article>
  );
};
