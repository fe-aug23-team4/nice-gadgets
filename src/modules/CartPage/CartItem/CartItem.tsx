import React from 'react';

import cn from 'classnames';
// import { useAppSelector } from '../../../store/hooks';
import { Phone } from '../../../types/Phone';
import styles from './CartItem.module.scss';
import { ReactComponent as CloseIcon }
  from '../../../static/icons/close_icon.svg';
import { ReactComponent as MinusIcon }
  from '../../../static/icons/minus_icon.svg';
import { ReactComponent as PlusIcon }
  from '../../../static/icons/plus_icon.svg';

type Props = {
  phone: Phone | null,
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  // const isThemeDark = useAppSelector((state) => state.theme);
  const isThemeDark = true;
  const isMinusDisabled = true;

  const getIconColor = (isTheme: boolean, isDisabled: boolean) => {
    if (isTheme) {
      return isDisabled ? '#4A4D58' : '#F1F2F9';
    }

    return isDisabled ? '#B4BDC3' : '#0F0F11';
  };

  const getClass = (isTheme:boolean, isDisabled: boolean) => {
    if (isTheme) {
      return isDisabled
        ? styles.changeAmountButton__dark
        : styles.changeAmountButton__activeDark;
    }

    return isDisabled
      ? {}
      : styles.changeAmountButton__active;
  };

  const minusIconColor = getIconColor(isThemeDark, isMinusDisabled);
  const minusClass = getClass(isThemeDark, isMinusDisabled);

  return (
    <article
      className={cn(styles.cartItem, {
        [styles.dark]: isThemeDark,
      })}
    >
      <div className={styles.top}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          className={styles.closeButton}
        >
          <CloseIcon
            color={isThemeDark ? '#4A4D58' : '#B4BDC3'}
          />
        </button>

        <div
          className={styles.imgContainer}
        >
          <img
            src={phone?.image}
            alt={phone?.name}
            // className={styles.img}
            className={cn(styles.img, {
              [styles.img__dark]: isThemeDark,
            })}
          />
        </div>

        <p
          className={cn(styles.content, {
            [styles.darkContent]: isThemeDark,
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
            className={cn(styles.changeAmountButton,
              minusClass)}
            disabled={isMinusDisabled}
          >
            <MinusIcon
              color={minusIconColor}
            />
          </button>
          <p
            className={cn(styles.content, {
              [styles.darkContent]: isThemeDark,
            })}
          >
            1
          </p>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            // className={cn(styles.changeAmountButton)}
            className={cn(styles.changeAmountButton, {
              [styles.changeAmountButton__activeDark]: isThemeDark,
            })}
          >
            <PlusIcon
              color={isThemeDark ? '#F1F2F9' : '#0F0F11'}
            />
          </button>
        </div>

        <p
          className={cn(styles.content, {
            [styles.darkContent]: isThemeDark,
          })}
        >
          {`$ ${phone?.price}`}
        </p>
      </div>
    </article>
  );
};
