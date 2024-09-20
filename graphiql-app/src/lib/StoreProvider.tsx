import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

interface StoreProviderProps {
  children: React.ReactNode;
  /* eslint-disable react/require-default-props */
  store?: AppStore;
}

function StoreProvider({ children, store: externalStore }: StoreProviderProps) {
  const store = useMemo(() => externalStore || makeStore(), [externalStore]);

  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
