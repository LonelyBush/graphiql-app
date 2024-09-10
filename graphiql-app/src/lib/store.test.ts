import { describe, it, expect } from 'vitest';
import { AppDispatch, RootState, makeStore } from './store';

describe('Redux Store', () => {
  it('should configure the store with the language slice reducer', () => {
    const store = makeStore();
    const { language } = store.getState() as RootState;
    expect(language).toBeDefined();
  });

  it('should have the correct types for dispatch and state', () => {
    const store = makeStore();
    const { dispatch, getState } = store;
    const typedDispatch: AppDispatch = dispatch;
    expect(typedDispatch).toBeDefined();
    expect(getState).toBeDefined();
  });
});
