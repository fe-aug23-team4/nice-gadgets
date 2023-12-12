/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';
import style from './PhoneCard.module.scss';
import { PhoneItem } from '../../../../types/PhoneItem';
// eslint-disable-next-line max-len
import phoneImage from '../../../../static/img/phones/apple-iphone-7/black/00.jpg';

type Props = {
  phoneItem: PhoneItem;
};

export const PhoneCard: React.FC<Props> = ({ phoneItem }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    // image,
  } = phoneItem;

  const isThemeDark = false;
  const isItemSelected = false;

  const showDiscountPrice = () => {
    if (price !== fullPrice) {
      return (
        <p
          className={cn(style.productCard__fullPrice, {
            [style.productCard__fullPrice__DARK]: isThemeDark,
          })}
        >
          {`$${fullPrice}`}
        </p>
      );
    }

    return false;
  };

  const characteristicsArray = [
    { label: 'Screen', state: screen },
    { label: 'Capacity', state: capacity },
    { label: 'RAM', state: ram },
  ];

  return (
    <div
      className={cn(style.productCard, {
        [style.productCard__DARK]: isThemeDark,
      })}
    >
      <div className={style.productCard__image__container}>
        <img
          src={phoneImage}
          // src={image}
          alt={name}
          className={style.productCard__image}
        />
      </div>

      <h2
        className={cn(style.productCard__name, {
          [style.productCard__name__DARK]: isThemeDark,
        })}
      >
        {name}
      </h2>

      <div
        className={cn(style.productCard__price, {
          [style.productCard__price__DARK]: isThemeDark,
        })}
      >
        <p
          className={cn(style.productCard__realPrice, {
            [style.productCard__realPrice__DARK]: isThemeDark,
          })}
        >
          {`$${price}`}
        </p>

        {showDiscountPrice()}
      </div>

      <div className={style.productCard__characteristics}>
        {characteristicsArray.map((characteristic) => (
          <div
            className={style.productCard__characteristics__item}
            key={characteristic.label}
          >
            <p
              className={cn(style.productCard__characteristics__label, {
                [style.productCard__characteristics__label__DARK]: isThemeDark,
              })}
            >
              {characteristic.label}
            </p>

            <p
              className={cn(style.productCard__characteristics__state, {
                [style.productCard__characteristics__state__DARK]: isThemeDark,
              })}
            >
              {characteristic.state}
            </p>
          </div>
        ))}
      </div>

      <div className={style.productCard__buttons}>
        <button
          className={cn(
            style.productCard__addToCart,
            { [style.productCard__addToCart__DARK]: isThemeDark },
            { [style.productCard__addToCart__SELECTED]: isItemSelected },
            {
              [style.productCard__addToCart__DARK__SELECTED]:
                isItemSelected && isThemeDark,
            },
          )}
          type="button"
        >
          {isItemSelected ? 'Added' : 'Add to cart'}
        </button>

        <a
          href=".."
          className={cn(
            style.productCard__addToFavourite,
            {
              [style.productCard__addToFavourite__SELECTED]:
                isItemSelected && !isThemeDark,
            },
            {
              [style.productCard__addToFavourite__DARK]:
                isThemeDark && !isItemSelected,
            },
            {
              [style.productCard__addToFavourite__DARK__SELECTED]:
                isItemSelected && isThemeDark,
            },
          )}
        />
      </div>
    </div>
  );
};
