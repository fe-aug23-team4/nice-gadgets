import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector } from '../../store/hooks';
import styles from './FavoritesPage.module.scss';
import arrowIcon from '../../static/icons/arrow-right_icon.svg';
import { Loader } from '../shared/Loader';
// import { Phone } from '../../types/Phone';
import { ProductList } from '../shared/ProductList';
import { HomeIcon } from './HomeIcon';
import { EmptyFavourites } from '../shared/EmptyFavourites';
// import { getNewestPhones } from '../../api/service';

export const FavoritesPage: React.FC = () => {
  // const [phones, setPhones] = useState<Phone[] | []>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const newPhones = await getNewestPhones();

  //       setPhones(newPhones);
  //     } catch (error) {
  //       // eslint-disable-next-line
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const favourites: Phone[] = phones;
  // const isThemeDark = false;
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { favorites } = useAppSelector(state => state.favorites);
  const isLoading = false;

  return (
    <section
      className={cn(styles.favouritesPage, {
        [styles.favouritesPageDark]: isDarkTheme,
      })}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.favouritesPage__top}>
            <Link to="/">
              <HomeIcon
                color={isDarkTheme ? '#fff' : '#000'}
                width="16"
                height="16"
              />
            </Link>

            <img src={arrowIcon} alt="arrow-icon" />
            {/* I will leave icon coz we will make a component later */}
            <p className={styles.favouritesPage__top__content}>Favourites</p>
          </div>
          <h2
            className={cn(styles.favouritesPage__title, {
              [styles.favouritesPage__title__dark]: isDarkTheme,
            })}
          >
            Favourites
          </h2>
          <p className={styles.favouritesPage__content}>
            {`${favorites.length || 0} items`}
          </p>
          {favorites.length === 0 ? (<EmptyFavourites />) : null}
          <ProductList phones={favorites} />
        </>
      )}
    </section>
  );
};
