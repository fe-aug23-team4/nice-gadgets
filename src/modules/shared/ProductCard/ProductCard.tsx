import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './ProductCard.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { Phone } from '../../../types/Phone';
import { AddToCart } from '../AddToCart';
import { AddToFavourites } from '../AddToFavourites';

type Props = {
  phone: Phone;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = phone;

  const { isDarkTheme } = useAppSelector((state) => state.theme);

  const characteristicsArray = [
    { label: 'Screen', state: screen },
    { label: 'Capacity', state: capacity },
    { label: 'RAM', state: ram },
  ];

  return (
    <div
      className={cn(style.productCard, {
        [style.productCard__DARK]: isDarkTheme,
      })}
    >
      <Link
        to={phone.phoneId}
        className={style.productCard__image__container}
      >
        <img src={image} alt={name} className={style.productCard__image} />
      </Link>

      <p
        className={cn(style.productCard__name, {
          [style.productCard__name__DARK]: isDarkTheme,
        })}
      >
        {name}
      </p>

      <div
        className={cn(style.productCard__price, {
          [style.productCard__price__DARK]: isDarkTheme,
        })}
      >
        <p
          className={cn(style.productCard__realPrice, {
            [style.productCard__realPrice__DARK]: isDarkTheme,
          })}
        >
          {`$${price}`}
        </p>

        {price !== fullPrice && (
          <p
            className={cn(style.productCard__fullPrice, {
              [style.productCard__fullPrice__DARK]: isDarkTheme,
            })}
          >
            {`$${fullPrice}`}
          </p>
        )}
      </div>

      <div className={style.productCard__characteristics}>
        {characteristicsArray.map((characteristic) => (
          <div
            className={style.productCard__characteristics__item}
            key={characteristic.label}
          >
            <p
              className={cn(style.productCard__characteristics__label, {
                [style.productCard__characteristics__label__DARK]: isDarkTheme,
              })}
            >
              {characteristic.label}
            </p>

            <p
              className={cn(style.productCard__characteristics__state, {
                [style.productCard__characteristics__state__DARK]: isDarkTheme,
              })}
            >
              {characteristic.state}
            </p>
          </div>
        ))}
      </div>

      <div className={style.productCard__buttons}>
        <AddToCart productItem={phone} />

        <AddToFavourites productItem={phone} />
      </div>
    </div>
  );
};
