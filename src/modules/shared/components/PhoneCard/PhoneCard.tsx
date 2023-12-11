/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';
import style from './PhoneCard.module.scss';

export type PhoneItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  fullPrice: number;
  year: number;
  screen?: string;
  capacity?: string;
  ram?: string;
  color?: string;
  description: {
    title: string;
    text: string[];
  }[];
};

export const PhoneCard = (phoneItem: any) => {
  const isThemeDark = false;
  const isItemSelected = false;

  const characteristicsArray = [
    { label: 'Screen', state: '128GB' },
    { label: 'Capacity', state: phoneItem.capacity },
    { label: 'RAM', state: phoneItem.ram },
  ];

  return (
    <div
      className={cn(style.productCard, {
        [style.productCard__DARK]: isThemeDark,
      })}
    >
      <img
        src={phoneItem.image}
        alt={phoneItem.name}
        className={style.productCard__image}
      />

      <h2
        className={cn(style.productCard__name, {
          [style.productCard__name__DARK]: isThemeDark,
        })}
      >
        {/* {phoneItem.name} */}
        Apple iPhone 11 128GB Green
      </h2>

      <div className={style.productCard__price}>
        <p
          className={cn(style.productCard__realPrice, {
            [style.productCard__realPrice__DARK]: isThemeDark,
          })}
        >
          {/* {`$${phoneItem.price}`} */}
          1100
        </p>

        <p
          className={cn(style.productCard__fullPrice, {
            [style.productCard__fullPrice__DARK]: isThemeDark,
          })}
        >
          {/* `$${phoneItem.fullPrice}` */}
          1050
        </p>
      </div>

      <div className={style.productCard__characteristics}>
        {characteristicsArray.map((characteristic) => (
          <div className={style.productCard__characteristics__item}>
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
          )}
          type="button"
        >
          Add to cart
        </button>

        <a
          href=".."
          className={cn(
            style.productCard__addToFavourite,
            { [style.productCard__addToFavourite__DARK]: isThemeDark },
            { [style.productCard__addToFavourited__SELECTED]: isItemSelected },
          )}
        />
      </div>
    </div>
  );
};
