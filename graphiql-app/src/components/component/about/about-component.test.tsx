import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import resources from '../../../utils/launguages/launguages-text';
import AboutComponent from './about-component';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

describe('AboutComponent', () => {
  it('should render the component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AboutComponent />
      </I18nextProvider>,
    );
    expect(
      screen.getByText(resources.en.translation.OurUndefinedsTeam),
    ).toBeInTheDocument();
    expect(
      screen.getByText(resources.en.translation.AboutTeam),
    ).toBeInTheDocument();
    expect(
      screen.getByText(resources.en.translation.AboutCourse),
    ).toBeInTheDocument();
  });
});
