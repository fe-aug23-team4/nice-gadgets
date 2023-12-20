/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { localClient } from '../../utils/localClient';
import { Product } from '../../types/Product';

export interface FavoritesState {
  favorites: Product[];
}

const initialState: FavoritesState = {
  favorites: localClient.read('favorites') || localClient.init('favorites', []),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
      localClient.add('favorites', action.payload);
    },

    remove: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload,
      );
      localClient.delete('favorites', action.payload);
    },
  },
});

export default favoritesSlice.reducer;
export const { actions } = favoritesSlice;
