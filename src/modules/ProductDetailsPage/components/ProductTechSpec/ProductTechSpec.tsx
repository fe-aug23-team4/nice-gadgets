import cn from 'classnames';
import styles from './ProductTechSpec.module.scss';

type Props = {
  isDarkTheme: boolean;
  specs: {
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    'built in memory': string;
    camera: string;
    zoom: string;
    cell: string[];
  };
};

export const ProductTechSpec: React.FC<Props> = ({ isDarkTheme, specs }) => {
  return (
    <div
      className={cn(styles.techSpec, {
        [styles.techSpecDark]: isDarkTheme,
      })}
    >
      <h4 className={styles.techSpec__title}>Tech specs</h4>
      <div className={styles.techSpec__wrapper}>
        {Object.entries(specs).map(([key, value]) => value && (
          <div key={key} className={styles.techSpec__item}>
            <p className={styles.techSpec__subtitle}>{key}</p>
            <p className={styles.techSpec__text}>
              {Array.isArray(value) ? value.join(', ') : value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
