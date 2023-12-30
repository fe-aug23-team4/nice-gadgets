import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/hooks';
import styles from './Filtration.module.scss';
import { getSearchWith } from '../../../helpers/getSearchWith';
import {
  ReactComponent as ArrowDown,
} from '../../../static/buttons/Icons_ArrowDown.svg';

const PER_PAGE = ['All', '8', '16', '32'];

const SORT_OPTIONS = [
  { label: 'Newest', value: 'year', order: 'desc' },
  { label: 'Oldest', value: 'year', order: 'asc' },
  { label: 'Alphabetically Asc', value: 'name', order: 'asc' },
  { label: 'Alphabetically Desc', value: 'name', order: 'desc' },
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

  function useOutsideAlerter(
    ref: RefObject<HTMLElement>,
    setIsListOpen: ((arg0: boolean) => void),
  ) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current
            && !ref.current.contains(event.target as Node)) {
          setIsListOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, setIsListOpen]);
  }

  const sortDropdownRef = useRef(null);
  const perPageDropdownRef = useRef(null);

  useOutsideAlerter(sortDropdownRef, setIsSortOpen);
  useOutsideAlerter(perPageDropdownRef, setIsPerPageOpen);

  const getPerPageParams = (newPerPage: string) => {
    if (newPerPage === 'All') {
      const search = getSearchWith(
        searchParams,
        { perPage: totalPhones.toString(), page: '1' },
      );

      return search;
    }

    const search = getSearchWith(
      searchParams,
      { perPage: newPerPage, page: '1' },
    );

    return search;
  };

  const setSortName = () => {
    const name = SORT_OPTIONS
      .find(option => option.value === sort && option.order === order);

    return name?.label || 'Not chosen';
  };

  const setPerPageName = () => {
    if (perPage === totalPhones.toString()) {
      return 'All';
    }

    return perPage;
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
          ref={sortDropdownRef}
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
                      page: '1',
                    }),
                  }}
                  key={option.label}
                  className={classNames(styles.filtration__option, {
                    [styles.filtration__option__DARK]: isDarkTheme,
                    [styles.filtration__option__SELECTED]:
                      sort === option.value && order === option.order,
                    [styles.filtration__option__DARK__SELECTED]: isDarkTheme
                      && sort === option.value && order === option.order,
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
          ref={perPageDropdownRef}
        >
          <button
            type="button"
            className={classNames(styles.filtration__dropdown, {
              [styles.filtration__dropdown__DARK]: isDarkTheme,
            })}
            onClick={() => setIsPerPageOpen(!isPerPageOpen)}
          >
            {setPerPageName()}

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
                    [styles.filtration__option__SELECTED]:
                      (perPage === amount
                        || ((perPage === totalPhones.toString())
                        && amount === 'All')),
                    [styles.filtration__option__DARK__SELECTED]: isDarkTheme
                    && (perPage === amount
                      || ((perPage === totalPhones.toString())
                      && amount === 'All')),
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
