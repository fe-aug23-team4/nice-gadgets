/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    change: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export default themeSlice.reducer;
export const { actions } = themeSlice;
