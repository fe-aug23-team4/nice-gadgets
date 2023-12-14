import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import styles from './BurgerMenu.module.scss';

import favourites from '../../../static/icons/favourites_icon.svg';
import favouritesDark from '../../../static/icons/favourites_icon_dark.svg';
import cart from '../../../static/icons/cart_icon.svg';
import cartDark from '../../../static/icons/cart_icon_dark.svg';

interface Burger {
  active: boolean,
  setActive: (state: boolean) => void,
  isThemeDark: boolean,
}

const getLinkClass = (
  { isActive }: { isActive: boolean },
) => cn([styles.burger__link], {
  [styles.burger__link__ISACTIVE]: isActive,
});

export const BurgerMenu: React.FC<Burger> = ({
  active,
  setActive,
  isThemeDark,
}) => {
  return (
    <aside className={cn([styles.burger], {
      [styles.burger__IsOpen]: active,
      [styles.burgerDark]: isThemeDark,
    })}
    >
      <nav>
        <ul className={styles.burger__menu}>
          <li>
            <NavLink
              to="/"
              className={getLinkClass}
              onClick={() => setActive(false)}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/phones"
              className={getLinkClass}
              onClick={() => setActive(false)}
            >
              phones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tablets"
              className={getLinkClass}
              onClick={() => setActive(false)}
            >
              tablets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className={getLinkClass}
              onClick={() => setActive(false)}
            >
              accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.burger__icons}>
        <div className={styles.burger__icon}>
          <NavLink
            to="/favorites"
            className={getLinkClass}
            onClick={() => setActive(false)}
          >
            <img
              src={!isThemeDark ? favourites : favouritesDark}
              alt="favourites"
            />
          </NavLink>
        </div>

        <div className={styles.burger__icon}>
          <NavLink
            to="/cart"
            className={getLinkClass}
            onClick={() => setActive(false)}
          >
            <img
              src={!isThemeDark ? cart : cartDark}
              alt="cart"
            />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
