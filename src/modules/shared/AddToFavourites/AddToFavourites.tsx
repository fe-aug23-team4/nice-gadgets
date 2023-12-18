import React from 'react';
import cn from 'classnames';
import styles from './AddToFavourites.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actions as favouritiesActions }
  from '../../../store/reducers/favoritesSlice';
import { Phone } from '../../../types/Phone';

type Props = {
  productItem: Phone;
};

export const AddToFavourites: React.FC<Props> = ({ productItem }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { favorites } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const isItemSelected = favorites
    .findIndex(favorite => favorite.id === productItem.id);

  const handleFavouritiesButton = (product: Phone) => {
    if (isItemSelected > 0) {
      dispatch(favouritiesActions.remove(product.id));
    } else {
      dispatch(favouritiesActions.add(product));
    }
  };

  return (
    <button
      type="button"
      aria-label="Add to favourite"
      className={cn(styles.addToFavourite, {
        [styles.addToFavourite__DARK]: isDarkTheme,
        [styles.addToFavourite__SELECTED]: isItemSelected > 0,
        [styles.addToFavourite__DARK__SELECTED]:
          isItemSelected > 0 && isDarkTheme,
      })}
      onClick={() => handleFavouritiesButton(productItem)}
    />
  );
};
