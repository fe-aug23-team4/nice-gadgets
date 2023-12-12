import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
// import { actions } from '../../../../store/reducers/themeSlice';

import styles from './Header.module.scss';
import logo from '../../../../static/img/Logo.png';
import burger from './static/icons/Burger.png';
import favourites from './static/icons/Favourites.png';
import cart from './static/icons/cart.png';
// import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export const Header: React.FC = () => {
  // const { isDarkTheme } = useAppSelector(state => state.theme);
  // const dispatch = useAppDispatch();

  // function ThemeHandler() {
  //   dispatch(actions.change());
  // }

  const getLinkClass = (
    { isActive }: { isActive: boolean },
  ) => cn([styles.header__link], {
    [styles.header__link__ISACTIVE]: isActive,
  });

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.header__logo} />
        </Link>

        <ul className={styles.header__nav}>
          <li>
            <NavLink
              to="/"
              className={getLinkClass}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/phones"
              className={getLinkClass}
            >
              phones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tablets"
              className={getLinkClass}
            >
              tablets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className={getLinkClass}
            >
              accessories
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.header__right}>
        <div className={styles.header__icon}>
          <NavLink to="/favorites" className={getLinkClass}>
            <img src={favourites} alt="favourites" />
          </NavLink>
        </div>

        <div className={styles.header__icon}>
          <NavLink to="/cart" className={getLinkClass}>
            <img src={cart} alt="cart" />
          </NavLink>
        </div>

        <div className={styles.header__burger}>
          <img src={burger} alt="burger-menu" />
        </div>
      </div>
    </header>
  );
};
