import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from '../../types/interface';

const initialState: LanguageState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
