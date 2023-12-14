import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
// import { actions } from '../../../../store/reducers/themeSlice';

import styles from './Header.module.scss';
import logo from '../../../static/logo/logo_bright.png';
import burger from '../../../static/icons/menu_icon.svg';
import close from '../../../static/icons/close_icon.svg';
import favourites from '../../../static/icons/favourites_icon.svg';
import cart from '../../../static/icons/cart_icon.svg';
import { BurgerMenu } from '../BurgerMenu';
// import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

const getLinkClass = (
  { isActive }: { isActive: boolean },
) => cn([styles.header__link], {
  [styles.header__link__ISACTIVE]: isActive,
});

export const Header: React.FC = () => {
  // const { isDarkTheme } = useAppSelector(state => state.theme);
  // const dispatch = useAppDispatch();

  // function ThemeHandler() {
  //   dispatch(actions.change());
  // }

  const [IsBurgerActive, setIsBurgerActive] = useState(false);

  const isThemeDark = false;

  return (
    <header className={cn(styles.header, {
      [styles.headerDark]: isThemeDark,
    })}
    >
      <div className={styles.header__left}>
        <Link
          to="/"
          onClick={() => setIsBurgerActive(false)}
        >
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

        <button
          type="button"
          className={styles.header__burger_icon}
          onClick={() => setIsBurgerActive(!IsBurgerActive)}
        >
          <img src={IsBurgerActive ? close : burger} alt="burger-menu" />
        </button>
      </div>

      <BurgerMenu
        active={IsBurgerActive}
        setActive={setIsBurgerActive}
        isThemeDark={isThemeDark}
      />
    </header>
  );
};
