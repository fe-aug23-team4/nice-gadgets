import React from 'react';
import cn from 'classnames';
import styles from './ProductAbout.module.scss';
import { Description } from '../../../../types/Product';

type Props = {
  isDarkTheme: boolean;
  description: Description[];
};

export const ProductAbout: React.FC<Props> = ({ isDarkTheme, description }) => {
  return (
    <div
      className={cn(styles.about, {
        [styles.aboutDark]: isDarkTheme,
      })}
    >
      <h4 className={styles.about__title}>About</h4>
      {description.map((item) => (
        <div key={item.title} className={styles.about__item}>
          <h5 className={styles.about__subtitle}>{item.title}</h5>
          {item.text.map((p) => (
            <p key={p} className={styles.about__text}>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
