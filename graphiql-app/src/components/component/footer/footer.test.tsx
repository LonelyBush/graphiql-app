import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../utils/launguages/i18n';
import Footer from './footer';

describe('Footer component', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Footer />
        </I18nextProvider>
      </MemoryRouter>,
    );
  };

  test('renders the footer without crashing', () => {
    setup();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders GitHub links with correct hrefs', () => {
    setup();

    const links = [
      { name: 'Roman Sokolov', url: 'https://github.com/rs0048' },
      { name: 'Yana Dyachok', url: 'https://github.com/Yana-Dyachok' },
      { name: 'Nikita Radevich', url: 'https://github.com/lonelybush' },
    ];

    links.forEach((link) => {
      const element = screen.getByText(link.name);
      expect(element.closest('a')).toHaveAttribute('href', link.url);
    });
  });

  test('renders the RS School link with correct href', () => {
    setup();
    const rsSchoolLink = screen.getByRole('link', { name: '' });
    expect(rsSchoolLink).toHaveAttribute('href', 'https://rs.school/');
  });

  test('renders the 2024 text', () => {
    setup();
    expect(screen.getByText('2024')).toBeInTheDocument();
  });
});
