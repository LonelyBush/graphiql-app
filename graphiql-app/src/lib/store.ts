import { configureStore } from '@reduxjs/toolkit';
import languageSlice from './slices/language-slice';
import restLinksSlice from './slices/rest-history-slice';
import graphiQLLinksSlice from './slices/graphiql-history-slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      language: languageSlice,
      restLinks: restLinksSlice,
      graphiQLLinks: graphiQLLinksSlice,
    },
  });

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
