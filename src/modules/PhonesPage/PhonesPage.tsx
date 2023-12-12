import React from 'react';
import classNames from 'classnames';
// import { useSearchParams } from 'react-router-dom';
import styles from './PhonesPage.module.scss';
// import grid from '../../styles/blocks/_grid.scss';
import { useAppSelector } from '../../store/hooks';
import { PhoneCard } from '../shared/components/PhoneCard';
import { PhoneItem } from '../../types/PhoneItem';
// import { Pagination } from '../shared/components/Pagination';

type Props = {
  visiblePhones: PhoneItem[];
};

export const PhonesPage: React.FC<Props> = ({ visiblePhones }) => {
  // const [searchParams] = useSearchParams();
  // const sort = searchParams.get('sort') || null;
  // const perPage = searchParams.get('perPage');
  // const page = searchParams.get('page');
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const phonesCounter = visiblePhones.length;
  // const totalPages = Math.floor(phonesCounter / perPage);

  // const showPagination = () => {
  //   if (phonesCounter > perPage) {
  //     return (
  //       <Pagination
  //         total={totalPages}
  //         perPage={perPage}
  //         currentPage={page}
  //         // onPageChange={(page) => { ... }}
  //       />
  //     );
  //   }

  //   return false;
  // };

  return (
    <div
      className={classNames(styles.phonesPage, {
        [styles.phonesPage__DARK]: isDarkTheme,
      })}
    >
      <p className={styles.phonesPage__navHistory}>Navigation history</p>
      <h1
        className={classNames(styles.phonesPage__title, {
          [styles.phonesPage__title__DARK]: isDarkTheme,
        })}
      >
        Mobile phones
      </h1>

      <p
        className={classNames(styles.phonesPage__counter, {
          [styles.phonesPage__counter__DARK]: isDarkTheme,
        })}
      >
        {`${phonesCounter} modeles`}
      </p>

      <div className={styles.phonesPage__filter}>
        <label
          htmlFor="sort-by"
          className={classNames(styles.phonesPage__label, {
            [styles.phonesPage__label__DARK]: isDarkTheme,
          })}
        >
          Sort by
        </label>
        <select
          name="sort-by"
          id="sort-by"
          className={classNames(styles.phonesPage__dropdown, {
            [styles.phonesPage__dropdown__DARK]: isDarkTheme,
          })}
        >
          <option
            value="age"
            className={classNames(styles.phonesPage__option, {
              [styles.phonesPage__option__DARK]: isDarkTheme,
            })}
          >
            Newest
          </option>

          <option
            value="title"
            className={classNames(styles.phonesPage__option, {
              [styles.phonesPage__option__DARK]: isDarkTheme,
            })}
          >
            Alphabetically
          </option>

          <option
            value="price"
            className={classNames(styles.phonesPage__option, {
              [styles.phonesPage__option__DARK]: isDarkTheme,
            })}
          >
            Cheapest
          </option>
        </select>

        <label htmlFor="per-page" className={styles.phonesPage__label}>
          Items on page
        </label>
        <select
          name="per-page"
          id="per-page"
          className={styles.phonesPage__dropdown}
        >
          <option
            value="all"
            className={classNames(styles.phonesPage__option, {
              [styles.phonesPage__option__DARK]: isDarkTheme,
            })}
          >
            All
          </option>

          <option
            value="4"
            className={classNames(styles.phonesPage__option, {
              [styles.phonesPage__option__DARK]: isDarkTheme,
            })}
          >
            4
          </option>

          <option
            value="8"
            className={classNames(styles.phonesPage__option, {
              [styles.phonesPage__option__DARK]: isDarkTheme,
            })}
          >
            8
          </option>

          <option
            value="16"
            className={classNames(styles.phonesPage__option, {
              [styles.phonesPage__option__DARK]: isDarkTheme,
            })}
          >
            16
          </option>
        </select>
      </div>

      <div className={styles.phonesPage__phonesList}>
        {visiblePhones.map((phone) => (
          <div className={styles.phonesPage__phoneItem}>
            <PhoneCard phoneItem={phone} key={phone.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
