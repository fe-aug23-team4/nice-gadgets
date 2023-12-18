/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { localClient } from '../../utils/localClient';

export interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme:
    localClient.read('isDarkTheme') || localClient.init('isDarkTheme', false),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    change: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localClient.write('isDarkTheme', state.isDarkTheme);
    },
  },
});

export default themeSlice.reducer;
export const { actions } = themeSlice;
