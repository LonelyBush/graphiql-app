import { configureStore } from '@reduxjs/toolkit';
import languageSlice from './slices/language-slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      language: languageSlice,
    },
  });

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
