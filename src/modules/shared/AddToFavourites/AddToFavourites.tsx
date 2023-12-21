import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './AddToFavourites.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actions as favouritiesActions }
  from '../../../store/reducers/favoritesSlice';
import { Product } from '../../../types/Product';

type Props = {
  productItem: Product;
};

export const AddToFavourites: React.FC<Props> = ({ productItem }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const { favorites } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const [isSelected, setIsSelected] = useState<boolean>(
    !!favorites.find(favorite => favorite.id === productItem.id),
  );

  const handleFavouritiesButton = (product: Product) => {
    if (isSelected) {
      dispatch(favouritiesActions.remove(product.id));
      setIsSelected(false);
    } else {
      dispatch(favouritiesActions.add(product));
      setIsSelected(true);
    }
  };

  useEffect(() => {
    setIsSelected(
      favorites.some((favoritesItem) => favoritesItem.id === productItem.id),
    );
  }, [favorites, productItem.id]);

  return (
    <button
      type="button"
      aria-label="Add to favourite"
      className={cn(styles.addToFavourite, {
        [styles.addToFavourite__DARK]: isDarkTheme,
        [styles.addToFavourite__SELECTED]: isSelected,
        [styles.addToFavourite__DARK__SELECTED]:
        isSelected && isDarkTheme,
      })}
      onClick={() => handleFavouritiesButton(productItem)}
    />
  );
};
