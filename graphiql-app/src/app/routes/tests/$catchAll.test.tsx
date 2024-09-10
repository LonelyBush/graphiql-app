import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CatchAll from '../$catchAll';
import resources from '../../../utils/launguages/launguages-text';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) =>
      (resources.en.translation as Record<string, string>)[key] || key,
  }),
}));

vi.mock('../../../components/ui/button/button', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <button type="button">{children}</button>
  ),
}));

describe('CatchAll Component', () => {
  it('renders the page title and 404 error digits', () => {
    render(<CatchAll />);
    expect(
      screen.getByText(resources.en.translation.NotFound),
    ).toBeInTheDocument();

    expect(screen.getAllByText('4').length).toBe(2);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders the Back to Main button with correct text and props', () => {
    render(<CatchAll />);
    expect(screen.getByRole('button')).toHaveTextContent(
      resources.en.translation.BackToMain,
    );
  });
});
