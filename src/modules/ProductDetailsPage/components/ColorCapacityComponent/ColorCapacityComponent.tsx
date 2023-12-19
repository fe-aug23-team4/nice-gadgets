import React from 'react';
import cn from 'classnames';
import styles from './ColorCapacityComponent.module.scss';
import { PhoneDetail } from '../../../../types/PhoneDetail';
import { ReactComponent as Color }
  from '../../../../static/icons/color-icon.svg';
import { useAppSelector } from '../../../../store/hooks';

type Props = {
  phoneDetails: PhoneDetail | null,
  setColor: (value: string) => void,
  setCapacity: (value: string) => void,
};

export const ColorCapacityComponent: React.FC<Props> = ({
  phoneDetails,
  setColor,
  setCapacity,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  return (phoneDetails
    && (
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
                phoneDetails.colorsAvailable.map(color => (
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <button
                    type="button"
                    className={styles.colorButton}
                    onClick={(event) => setColor(event.currentTarget.innerText)}
                  >
                    <Color
                      key={color}
                      color={color}
                      stroke={color === phoneDetails.color
                        ? '#f1f2f9' : '#3b3e4a'}
                    />
                    <p className={styles.colorContent}>{color}</p>
                  </button>
                ))
              )
              : (
                phoneDetails.colorsAvailable.map(color => (
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <button
                    type="button"
                    className={styles.colorButton}
                    onClick={(event) => setColor(event.currentTarget.innerText)}
                  >
                    <Color
                      key={color}
                      color={color}
                      stroke={color === phoneDetails.color
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
            {phoneDetails.capacityAvailable.map(capacity => (
              <button
                type="button"
                key={capacity}
                className={cn(styles.capacityButton, {
                  [styles.capacityButton__ACTIVE]:
                    capacity === phoneDetails.capacity,
                  [styles.capacityButton__DARK]: isDarkTheme,
                  [styles.capacityButton__ACTIVE__DARK]:
                    isDarkTheme && capacity === phoneDetails.capacity,

                })}
                onClick={(event) => setCapacity(event.currentTarget.innerText)}
              >
                <p>{capacity}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    )
  );
};
