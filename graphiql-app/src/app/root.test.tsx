import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './root';

vi.mock('@remix-run/react', () => ({
  Links: () => <link data-testid="links" />,
  Meta: () => <meta data-testid="meta" />,
  Scripts: () => <script data-testid="scripts" />,
  useNavigate: () => vi.fn(),
}));

vi.mock('../components/component/layout/layout', () => ({
  default: () => <div data-testid="layout">Layout</div>,
}));

vi.mock('../components/component/footer/footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));
vi.mock('../components/component/error-boundary/error-boundary', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="error-boundary">{children}</div>
  ),
}));
vi.mock('../components/ui/toast/toast', () => ({
  default: () => <div data-testid="toast">Toast</div>,
}));
vi.mock('../lib/StoreProvider', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="store-provider">{children}</div>
  ),
}));
vi.mock('../lib/context/auth-context', () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="auth-provider">{children}</div>
  ),
}));

vi.mock('react-i18next', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import('react-i18next');

  return {
    ...actual,
    initReactI18next: actual.initReactI18next,
    I18nextProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="i18next-provider">{children}</div>
    ),
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});

vi.mock('../utils/launguages/i18n', () => ({
  default: {},
}));

describe('App Component', () => {
  it('renders all main parts of the application', () => {
    render(<App />);

    expect(screen.getByTestId('meta')).toBeInTheDocument();
    expect(screen.getByTestId('links')).toBeInTheDocument();

    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('toast')).toBeInTheDocument();
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();

    expect(screen.getByTestId('store-provider')).toBeInTheDocument();
    expect(screen.getByTestId('auth-provider')).toBeInTheDocument();
    expect(screen.getByTestId('i18next-provider')).toBeInTheDocument();

    expect(screen.getByTestId('scripts')).toBeInTheDocument();
  });
});
