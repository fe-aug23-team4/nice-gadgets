import React from 'react';
import cn from 'classnames';
import styles from './ColorCapacityComponent.module.scss';
import { useAppSelector } from '../../../../store/hooks';
import { ProductDetail } from '../../../../types/Product';

type Props = {
  productDetail: ProductDetail;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setCapacity: React.Dispatch<React.SetStateAction<string>>;
};

export const ColorCapacityComponent: React.FC<Props> = ({
  productDetail,
  setColor,
  setCapacity,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  return (
    <section
      className={cn(styles.colorCapacity, {
        [styles.colorCapacity__DARK]: isDarkTheme,
      })}
    >
      <div className={styles.contentContainer}>

        <p
          className={cn(styles.content, {
            [styles.content__DARK]: isDarkTheme,
          })}
        >
          Available colors
        </p>

        <div className={styles.buttonContainer}>
          {productDetail.colorsAvailable.map(color => (
            <button
              type="button"
              key={color}
              className={cn(styles.colorButton, {
                [styles.colorButton__ACTIVE]: color === productDetail.color,
                [styles.colorButton__DARK]: isDarkTheme,
                [styles.colorButton__DARK__ACTIVE]:
                  isDarkTheme && color === productDetail.color,
              })}
              onClick={(event) => setColor(event.currentTarget.innerText)}
            >
              <div
                style={{ backgroundColor: color }}
                className={styles.colorButtonInside}
              >
                <p className={styles.colorContent}>{color}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.contentContainer}>
        <h5 className={styles.content}>
          Select capacity
        </h5>
        <div className={styles.buttonContainer}>
          {productDetail.capacityAvailable.map(capacity => (
            <button
              type="button"
              key={capacity}
              className={cn(styles.capacityButton, {
                [styles.capacityButton__ACTIVE]:
                  capacity === productDetail.capacity,
                [styles.capacityButton__DARK]: isDarkTheme,
                [styles.capacityButton__ACTIVE__DARK]:
                  isDarkTheme && capacity === productDetail.capacity,

              })}
              onClick={(event) => setCapacity(event.currentTarget.innerText)}
            >
              <p>{capacity}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
