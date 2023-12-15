import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import styles from './BurgerMenu.module.scss';

import { ReactComponent as Favourites }
  from '../../../static/icons/favourites_icon.svg';
import { ReactComponent as Cart }
  from '../../../static/icons/cart_icon.svg';

interface Burger {
  active: boolean,
  setActive: (state: boolean) => void,
  isThemeDark: boolean,
  favorites: string[]
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
  favorites,
}) => {
  const getButtonColor = () => {
    return isThemeDark ? '#F1F2F9' : '#0F0F11';
  };

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
            <div className={styles.burger__favorites}>
              <Favourites color={getButtonColor()} />
              {favorites.length !== 0 && (
                <span className={styles.burger__favorites_count}>
                  {favorites.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>

        <div className={styles.burger__icon}>
          <NavLink
            to="/cart"
            className={getLinkClass}
            onClick={() => setActive(false)}
          >
            <Cart color={getButtonColor()} />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
