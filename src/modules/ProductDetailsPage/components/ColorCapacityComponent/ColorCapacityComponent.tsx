import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cn from 'classnames';

import styles from './ColorCapacityComponent.module.scss';

import { useAppSelector } from '../../../../store/hooks';
import { ProductDetail } from '../../../../types/Product';
import { EndPoints } from '../../../../types/Enums';

type Props = {
  productDetail: ProductDetail;
  additional: ProductDetail[];
  endPoint: EndPoints,
};

export const ColorCapacityComponent: React.FC<Props> = ({
  productDetail,
  additional,
  endPoint,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [color, setColor] = useState(productDetail.color);
  const [capacity, setCapacity] = useState(productDetail.capacity);
  const navigate = useNavigate();
  const location = useLocation();

  const changeUrl = (id: string) => {
    navigate(`/${endPoint}/${id}`, {
      replace: true,
      state: { ...location.state },
    });
  };

  const handleColorClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const selectedColor = event.currentTarget.innerText;

    setColor(selectedColor);

    const newProductDetail = additional.find(
      (prodDetail) => prodDetail.color === selectedColor
        && prodDetail.capacity === capacity,
    ) || null;

    if (newProductDetail) {
      changeUrl(newProductDetail.id);
    }
  };

  const handleCapacityClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const selectedCapacity = event.currentTarget.innerText;

    setCapacity(selectedCapacity);

    const newProductDetail = additional.find(
      (prodDetail) => prodDetail.capacity === selectedCapacity
        && prodDetail.color === color,
    ) || null;

    if (newProductDetail) {
      changeUrl(newProductDetail.id);
    }
  };

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
          {productDetail.colorsAvailable.map((col) => (
            <button
              type="button"
              key={col}
              className={cn(styles.colorButton, {
                [styles.colorButton__ACTIVE]: col === productDetail.color,
                [styles.colorButton__DARK]: isDarkTheme,
                [styles.colorButton__DARK__ACTIVE]:
                  isDarkTheme && col === productDetail.color,
              })}
              onClick={handleColorClick}
            >
              <div
                style={{ backgroundColor: col }}
                className={styles.colorButtonInside}
              >
                <p className={styles.colorContent}>{col}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.contentContainer}>
        <h5 className={styles.content}>Select capacity</h5>
        <div className={styles.buttonContainer}>
          {productDetail.capacityAvailable.map((cap) => (
            <button
              type="button"
              key={cap}
              className={cn(styles.capacityButton, {
                [styles.capacityButton__ACTIVE]: cap === productDetail.capacity,
                [styles.capacityButton__DARK]: isDarkTheme,
                [styles.capacityButton__ACTIVE__DARK]:
                  isDarkTheme && cap === productDetail.capacity,
              })}
              onClick={handleCapacityClick}
            >
              <p>{cap}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
