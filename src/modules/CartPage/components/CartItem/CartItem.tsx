import React from 'react';

import cn from 'classnames';
import { useAppSelector } from '../../../../store/hooks';
import { Phone } from '../../../../types/Phone';
import styles from './CartItem.module.scss';
import { ReactComponent as CloseIcon }
  from '../../../../static/icons/close_icon.svg';
import { ReactComponent as MinusIcon }
  from '../../../../static/icons/minus_icon.svg';
import { ReactComponent as PlusIcon }
  from '../../../../static/icons/plus_icon.svg';

type Props = {
  phone: Phone | null;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const isMinusDisabled = true;

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

  const minusIconColor = getIconColor(isDarkTheme, isMinusDisabled);
  const minusClass = getClass(isDarkTheme, isMinusDisabled);

  return (
    <article
      className={cn(styles.cartItem, {
        [styles.cartItem__DARK]: isDarkTheme,
      })}
    >
      <div className={styles.top}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className={styles.closeButton}>
          <CloseIcon color={isDarkTheme ? '#4A4D58' : '#B4BDC3'} />
        </button>

        <div className={styles.imgContainer}>
          <img
            src={phone?.image}
            alt={phone?.name}
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
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            className={cn(styles.changeAmountButton, minusClass)}
            disabled={isMinusDisabled}
          >
            <MinusIcon color={minusIconColor} />
          </button>
          <p
            className={cn(styles.content, {
              [styles.darkContent]: isDarkTheme,
            })}
          >
            1
          </p>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            className={cn(
              styles.changeAmountButton,
              styles.changeAmountButton__ACTIVE,
              {
                [styles.changeAmountButton__activeDARK]: isDarkTheme,
              },
            )}
          >
            <PlusIcon color={isDarkTheme ? '#F1F2F9' : '#0F0F11'} />
          </button>
        </div>

        <p
          className={cn(styles.content, {
            [styles.darkContent]: isDarkTheme,
          })}
        >
          {`$ ${phone?.price}`}
        </p>
      </div>
    </article>
  );
};
