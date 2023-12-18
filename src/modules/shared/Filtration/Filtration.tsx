import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/hooks';
import styles from './Filtration.module.scss';
import { SortBy } from '../../../types/SortBy';
import { getSearchWith } from '../../../utils/getSearchWith';

const PER_PAGE = ['All', '4', '8', '16'];

type Props = {
  sort: SortBy;
  perPage: string;
};

export const Filtration: React.FC<Props> = ({ sort, perPage }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [searchParams] = useSearchParams();

  const onSortChange = (newSort: SortBy) => {
    return getSearchWith(searchParams, { sort: newSort });
  };

  const onPerPageChange = (newPerPage: string) => {
    if (perPage === 'All') {
      return getSearchWith(searchParams, { perPage: 'all' });
    }

    return getSearchWith(searchParams, { perPage: newPerPage });
  };

  return (
    <div className={styles.filtration}>
      <label
        htmlFor="sort-by"
        className={classNames(styles.productsPage__label, {
          [styles.productsPage__label__DARK]: isDarkTheme,
        })}
      >
        Sort by
      </label>
      <select
        name="sort-by"
        id="sort-by"
        className={classNames(styles.productsPage__dropdown, {
          [styles.productsPage__dropdown__DARK]: isDarkTheme,
        })}
        onChange={(event) => onSortChange(event
          .target.value as SortBy)}
      >
        {Object.entries(SortBy).map(([key, value]) => (
          <option
            key={key}
            value={value}
            className={classNames(styles.productsPage__option, {
              [styles.productsPage__option__DARK]: isDarkTheme,
            })}
            selected={value === sort}
          >
            {key}
          </option>
        ))}
      </select>

      <label
        htmlFor="per-page"
        className={styles.productsPage__label}
      >
        Items on page
      </label>
      <select
        name="per-page"
        id="per-page"
        className={styles.productsPage__dropdown}
        onChange={(event) => onPerPageChange(event.target.value)}
      >
        {PER_PAGE.map(amount => (
          <option
            value={amount}
            className={classNames(styles.productsPage__option, {
              [styles.productsPage__option__DARK]: isDarkTheme,
            })}
            selected={amount === perPage}
          >
            {amount}
          </option>
        ))}
      </select>
    </div>

  );
};
