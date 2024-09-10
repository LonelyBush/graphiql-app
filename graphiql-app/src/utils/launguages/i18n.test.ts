import { describe, it, expect, vi } from 'vitest';
import i18n from './i18n';
import store from '../../lib/store';

describe('i18n initialization and language change', () => {
  it('should initialize with the saved language from the store', () => {
    const initialState = { language: { language: 'en' } };
    const getStateSpy = vi
      .spyOn(store, 'getState')
      .mockReturnValue(initialState);

    expect(i18n.language).toBe('en');

    getStateSpy.mockRestore();
  });

  it('should initialize with default language when store language is null', () => {
    const initialState = { language: { language: 'en' } };
    const getStateSpy = vi
      .spyOn(store, 'getState')
      .mockReturnValue(initialState);

    const defaultLanguage = 'en';
    i18n.changeLanguage(defaultLanguage);

    expect(i18n.language).toBe(defaultLanguage);

    getStateSpy.mockRestore();
  });

  it('should change language when the store language changes', async () => {
    const initialState = { language: { language: 'ru' } };
    const getStateSpy = vi
      .spyOn(store, 'getState')
      .mockReturnValue(initialState);
    const subscribeSpy = vi
      .spyOn(store, 'subscribe')
      .mockImplementation((callback) => {
        const newState = { language: { language: 'ru' } };
        getStateSpy.mockReturnValue(newState);
        callback();
        return () => {};
      });

    store.subscribe(() => {
      i18n.changeLanguage('ru');
    });

    await i18n.changeLanguage('ru');
    expect(i18n.language).toBe('ru');

    getStateSpy.mockRestore();
    subscribeSpy.mockRestore();
  });
});
