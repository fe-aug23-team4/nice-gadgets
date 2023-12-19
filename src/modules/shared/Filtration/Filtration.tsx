import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/hooks';
import styles from './Filtration.module.scss';
import { getSearchWith } from '../../../utils/getSearchWith';
import {
  ReactComponent as ArrowDown,
} from '../../../static/buttons/Icons_ArrowDown.svg';

const PER_PAGE = ['All', '4', '8', '16'];

const SORT_OPTIONS = [
  { label: 'Newest', value: 'date', order: 'desc' },
  { label: 'Oldest', value: 'date', order: 'asc' },
  { label: 'Alphabetically Asc', value: 'title', order: 'asc' },
  { label: 'Alphabetically Desc', value: 'title', order: 'desc' },
  { label: 'Cheapest', value: 'price', order: 'asc' },
  { label: 'Most Expensive', value: 'price', order: 'desc' },
];

type Props = {
  totalPhones: number;
  sort: string;
  order: string;
  perPage: string;
};

export const Filtration: React.FC<Props> = ({
  totalPhones,
  sort,
  order,
  perPage,
}) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isPerPageOpen, setIsPerPageOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const getPerPageParams = (newPerPage: string) => {
    if (newPerPage === 'All') {
      const search = getSearchWith(
        searchParams, { perPage: totalPhones.toString() },
      );

      return search;
    }

    const search = getSearchWith(searchParams, { perPage: newPerPage });

    return search;
  };

  const setSortName = () => {
    const name = SORT_OPTIONS
      .find(option => option.value === sort && option.order === order);

    return name?.label || 'Not chosen';
  };

  const handleSortOptionClick = () => {
    setIsSortOpen(false);
  };

  const handlePerPageOptionClick = () => {
    setIsPerPageOpen(false);
  };

  return (
    <div className={styles.filtration}>
      <div className={styles.filtration__block}>
        <label
          htmlFor="sort-by"
          className={classNames(styles.filtration__label, {
            [styles.filtration__label__DARK]: isDarkTheme,
          })}
        >
          Sort by
        </label>
        <div
          className={styles.filtration__wrapper}
        >
          <button
            type="button"
            className={classNames(styles.filtration__dropdown, {
              [styles.filtration__dropdown__DARK]: isDarkTheme,
            })}
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            {setSortName()}

            <ArrowDown
              color={isDarkTheme ? '#75767f' : '#b4bdc3'}
              style={{ transform: isSortOpen ? 'rotate(180deg)' : 'rotate(0)' }}
            />
          </button>

          {isSortOpen && (
            <div
              className={classNames(styles.filtration__list, {
                [styles.filtration__list__DARK]: isDarkTheme,
              })}
            >
              {SORT_OPTIONS.map((option) => (
                <Link
                  to={{
                    search: getSearchWith(searchParams, {
                      sort: option.value,
                      order: option.order,
                    }),
                  }}
                  key={option.label}
                  className={classNames(styles.filtration__option, {
                    [styles.filtration__option__DARK]: isDarkTheme,
                  })}
                  onClick={handleSortOptionClick}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.filtration__block}>
        <label
          htmlFor="per-page"
          className={styles.filtration__label}
        >
          Items on page
        </label>

        <div
          className={styles.filtration__wrapper}
        >
          <button
            type="button"
            className={classNames(styles.filtration__dropdown, {
              [styles.filtration__dropdown__DARK]: isDarkTheme,
            })}
            onClick={() => setIsPerPageOpen(!isPerPageOpen)}
          >
            {perPage === totalPhones.toString()
              ? 'All'
              : perPage}

            <ArrowDown
              color={isDarkTheme ? '#75767f' : '#b4bdc3'}
              style={{
                transform: isPerPageOpen
                  ? 'rotate(180deg)'
                  : 'rotate(0)',
              }}
            />
          </button>

          {isPerPageOpen && (
            <div
              className={classNames(styles.filtration__list, {
                [styles.filtration__list__DARK]: isDarkTheme,
              })}
            >
              {PER_PAGE.map(amount => (
                <Link
                  to={{ search: getPerPageParams(amount) }}
                  key={amount}
                  className={classNames(styles.filtration__option, {
                    [styles.filtration__option__DARK]: isDarkTheme,
                  })}
                  onClick={handlePerPageOptionClick}
                >
                  {amount}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
