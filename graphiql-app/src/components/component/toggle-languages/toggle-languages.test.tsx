import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect, vi } from 'vitest';
import ToggleLanguages from './toggle-languages';
import languageSlice from '../../../lib/slices/language-slice';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
    },
  }),
}));

const mockStore = configureStore({
  reducer: {
    language: languageSlice,
  },
  preloadedState: {
    language: {
      language: 'en',
    },
  },
});

describe('ToggleLanguages', () => {
  it('renders with correct initial language and toggles language on button click', () => {
    render(
      <Provider store={mockStore}>
        <ToggleLanguages />
      </Provider>,
    );

    expect(screen.getByText('En')).toBeInTheDocument();
    expect(screen.getByText('Ru')).toBeInTheDocument();

    const toggleButton = screen.getByRole('button');

    fireEvent.click(toggleButton);
    expect(screen.getByText('Ru')).toBeInTheDocument();
  });
});
