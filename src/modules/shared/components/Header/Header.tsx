import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
// import { actions } from '../../../../store/reducers/themeSlice';

import styles from './Header.module.scss';
import logo from '../../../../static/img/Logo.png';
import burger from './static/icons/Burger.png';
import close from './static/icons/Close.png';
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

  const [IsBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <header className={styles.header}>
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
          className={cn([styles.header__burger_icon], {
            [styles.header__burger__IsOpen]: IsBurgerActive,
          })}
          onClick={() => setIsBurgerActive(!IsBurgerActive)}
        >
          {IsBurgerActive
            ? (<img src={close} alt="burger-menu" />)
            : (<img src={burger} alt="burger-menu" />)}

        </button>

        <aside className={cn([styles.header__burger], {
          [styles.header__burger__IsOpen]: IsBurgerActive,
        })}
        >
          <nav>
            <ul className={styles.header__burger_menu}>
              <li>
                <NavLink
                  to="/"
                  className={getLinkClass}
                  onClick={() => setIsBurgerActive(false)}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/phones"
                  className={getLinkClass}
                  onClick={() => setIsBurgerActive(false)}
                >
                  phones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tablets"
                  className={getLinkClass}
                  onClick={() => setIsBurgerActive(false)}
                >
                  tablets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/accessories"
                  className={getLinkClass}
                  onClick={() => setIsBurgerActive(false)}
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
};
