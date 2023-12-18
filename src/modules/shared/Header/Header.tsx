import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
import { actions } from '../../../store/reducers/themeSlice';

import styles from './Header.module.scss';
import logo from '../../../static/logo/logo_bright.png';
import logoDark from '../../../static/logo/logo_dark.png';
import { ReactComponent as Burger }
  from '../../../static/icons/menu_icon.svg';
import { ReactComponent as Close }
  from '../../../static/icons/close_icon.svg';
import { ReactComponent as Favourites }
  from '../../../static/icons/favourites_icon.svg';
import { ReactComponent as Cart }
  from '../../../static/icons/cart_icon.svg';

import { BurgerMenu } from '../BurgerMenu';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const getLinkClass = (
  { isActive }: { isActive: boolean },
) => cn([styles.header__link], {
  [styles.header__link__ISACTIVE]: isActive,
});

export const Header: React.FC = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);
  const { favorites } = useAppSelector(state => state.favorites);
  const dispatch = useAppDispatch();

  function themeHandler() {
    dispatch(actions.change());
  }

  const getButtonColor = () => {
    return isDarkTheme ? '#F1F2F9' : '#0F0F11';
  };

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isBurgerActive ? 'hidden' : 'visible';
  }, [isBurgerActive]);

  return (
    <header className={cn(styles.header, {
      [styles.headerDark]: isDarkTheme,
    })}
    >
      <div className={styles.header__left}>
        <Link
          to="/"
          onClick={() => setIsBurgerActive(false)}
        >
          <img
            src={!isDarkTheme ? logo : logoDark}
            alt="logo"
            className={styles.header__logo}
          />
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
        <div className={styles.header__themeSwitch}>
          <input
            type="checkbox"
            className={styles.header__themeSwitch_input}
            id="themeSwitch"
            checked={isDarkTheme}
            onChange={themeHandler}
          />
          <label
            htmlFor="themeSwitch"
            className={styles.header__themeSwitch_label}
          >
            <span />
          </label>
        </div>

        <div className={styles.header__icon}>
          <NavLink to="/favorites" className={getLinkClass}>
            <Favourites color={getButtonColor()} />
            {!!favorites.length && (
              <div className={styles.header__favorites}>
                {favorites.length}
              </div>
            )}
          </NavLink>
        </div>

        <div className={styles.header__icon}>
          <NavLink to="/cart" className={getLinkClass}>
            <Cart color={getButtonColor()} />
          </NavLink>
        </div>

        <button
          type="button"
          className={styles.header__burger_icon}
          onClick={() => setIsBurgerActive(!isBurgerActive)}
        >
          {isBurgerActive ? (
            <Close color={getButtonColor()} />
          ) : (
            <Burger color={getButtonColor()} />
          )}
        </button>
      </div>

      <BurgerMenu
        active={isBurgerActive}
        setActive={setIsBurgerActive}
        isThemeDark={isDarkTheme}
        favoritesAmount={favorites.length}
      />
    </header>
  );
};
