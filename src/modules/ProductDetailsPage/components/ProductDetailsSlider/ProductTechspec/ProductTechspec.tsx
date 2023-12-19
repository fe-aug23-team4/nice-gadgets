import cn from 'classnames';
import styles from './ProductTechspec.module.scss';

type Props = {
  isDarkTheme: boolean,
  screen?: string,
  resolution?: string,
  processor?: string,
  ram?: string,
  camera?: string,
  zoom?: string,
  cell?: string[],
};

export const ProductTechspec: React.FC<Props> = ({
  isDarkTheme,
  screen,
  resolution,
  processor,
  ram,
  camera,
  zoom,
  cell,
}) => {
  return (
    <div className={cn(styles.techspec, {
      [styles.techspecDark]: isDarkTheme,
    })}
    >
      <h3 className={styles.techspec__title}>
        Tech specs
      </h3>
      <div className={styles.techspec__wrapper}>
        {screen && (
          <div className={styles.techspec__item}>
            <div className={styles.techspec__subtitle}>
              Screen
            </div>
            <div className={styles.techspec__text}>
              {screen}
            </div>
          </div>
        )}

        {resolution && (
          <div className={styles.techspec__item}>
            <div className={styles.techspec__subtitle}>
              Resolution
            </div>
            <div className={styles.techspec__text}>
              {resolution}
            </div>
          </div>
        )}

        {processor && (
          <div className={styles.techspec__item}>
            <div className={styles.techspec__subtitle}>
              Processor
            </div>
            <div className={styles.techspec__text}>
              {processor}
            </div>
          </div>
        )}

        {ram && (
          <div className={styles.techspec__item}>
            <div className={styles.techspec__subtitle}>
              RAM
            </div>
            <div className={styles.techspec__text}>
              {ram}
            </div>
          </div>
        )}

        {camera && (
          <div className={styles.techspec__item}>
            <div className={styles.techspec__subtitle}>
              Camera
            </div>
            <div className={styles.techspec__text}>
              {camera}
            </div>
          </div>
        )}

        {zoom && (
          <div className={styles.techspec__item}>
            <div className={styles.techspec__subtitle}>
              Zoom
            </div>
            <div className={styles.techspec__text}>
              {zoom}
            </div>
          </div>
        )}

        {cell && (
          <div className={styles.techspec__item}>
            <div className={styles.techspec__subtitle}>
              Cell
            </div>
            <div className={styles.techspec__text}>
              {cell.join(', ')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
