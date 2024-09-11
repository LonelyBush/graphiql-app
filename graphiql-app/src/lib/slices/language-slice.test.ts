import { describe, it, expect } from 'vitest';
import languageReducer, { setLanguage } from './language-slice';
import { LanguageState } from '../../types/interface';

describe('languageSlice', () => {
  const initialState: LanguageState = {
    language: 'en',
  };

  it('should return the initial state', () => {
    const result = languageReducer(undefined, { type: 'unknown' });
    expect(result).toEqual(initialState);
  });

  it('should handle setLanguage', () => {
    const newLanguage = 'ru';
    const action = setLanguage(newLanguage);
    const state = languageReducer(initialState, action);
    expect(state.language).toEqual(newLanguage);
  });
});
