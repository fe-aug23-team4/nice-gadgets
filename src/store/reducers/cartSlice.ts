/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { localClient } from '../../utils/localClient';
import { Product, ProductWithAmount } from '../../types/Product';

export interface CartState {
  cart: ProductWithAmount[];
}

function prepareProductForCart(product: Product): ProductWithAmount {
  return Object.assign(product, { amount: 1 });
}

const initialState: CartState = {
  cart: localClient.read('cart') || localClient.init('cart', []),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const preparedProduct = prepareProductForCart(action.payload);

      state.cart.push(preparedProduct);
      localClient.add('cart', preparedProduct);
    },

    remove: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localClient.delete('cart', action.payload);
    },

    increase: (state, action: PayloadAction<number>) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
          localClient.update('cart', item);
        }
      });
    },

    decrease: (state, action: PayloadAction<number>) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload && item.amount > 1) {
          item.amount -= 1;
          localClient.update('cart', item);
        }
      });
    },

    clear: (state) => {
      state.cart = [];
      localClient.write('cart', []);
    },
  },
});

export default cartSlice.reducer;
export const { actions } = cartSlice;
