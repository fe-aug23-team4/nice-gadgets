import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/hooks';
import styles from './Filtration.module.scss';
import { SortBy } from '../../../types/SortBy';
import { getSearchWith } from '../../../utils/getSearchWith';
import {
  ReactComponent as ArrowDown,
} from '../../../static/buttons/Icons_ArrowDown.svg';

const PER_PAGE = ['All', '4', '8', '16'];

type Props = {
  sort: SortBy;
  perPage: string;
};

export const Filtration: React.FC<Props> = ({ sort, perPage }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isPerPageOpen, setIsPerPageOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const getPerPageParams = (newPerPage: string) => {
    if (perPage === 'All') {
      const search = getSearchWith(searchParams, { perPage: 'all' });

      return search;
    }

    const search = getSearchWith(searchParams, { perPage: newPerPage });

    return search;
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
            {sort}

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
              {Object.entries(SortBy).map(([key, value]) => (
                <Link
                  to={getSearchWith(searchParams, { sort: value })}
                  key={key}
                  className={classNames(styles.filtration__option, {
                    [styles.filtration__option__DARK]: isDarkTheme,
                  })}
                >
                  {key}
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
            {perPage}

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
                  to={getPerPageParams(amount)}
                  key={amount}
                  className={classNames(styles.filtration__option, {
                    [styles.filtration__option__DARK]: isDarkTheme,
                  })}
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
