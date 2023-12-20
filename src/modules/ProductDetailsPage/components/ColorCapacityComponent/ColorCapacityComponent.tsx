import React from 'react';
import cn from 'classnames';
import styles from './ColorCapacityComponent.module.scss';
import { ReactComponent as Color }
  from '../../../../static/icons/color-icon.svg';
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
          {isDarkTheme
            ? (
              productDetail.colorsAvailable.map(color => (
                <button
                  type="button"
                  key={color}
                  className={styles.colorButton}
                  onClick={(event) => setColor(event.currentTarget.innerText)}
                >
                  <Color
                    color={color}
                    stroke={color === productDetail.color
                      ? '#f1f2f9' : '#3b3e4a'}
                  />
                  <p className={styles.colorContent}>{color}</p>
                </button>
              ))
            )
            : (
              productDetail.colorsAvailable.map(color => (
                <button
                  type="button"
                  key={color}
                  className={styles.colorButton}
                  onClick={(event) => setColor(event.currentTarget.innerText)}
                >
                  <Color
                    color={color}
                    stroke={color === productDetail.color
                      ? '#0f0f11' : '#e2e6e9'}
                  />
                  <p className={styles.colorContent}>{color}</p>
                </button>
              ))
            )}
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
