import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

interface StoreProviderProps {
  children: React.ReactNode;
  /* eslint-disable react/require-default-props */
  store?: AppStore;
}

function StoreProvider({ children, store: externalStore }: StoreProviderProps) {
  const storeRef = useRef<AppStore>(externalStore || makeStore());

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider;
