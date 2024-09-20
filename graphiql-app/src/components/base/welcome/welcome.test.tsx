import { describe, expect, it, Mock, vi } from 'vitest';
import { useTranslation } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useAuth from '../../../utils/hooks/useAuth-hook';
import WelcomeComponent from './welcome';

vi.mock('../../../utils/hooks/useAuth-hook', () => ({
  default: vi.fn(),
}));

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}));

vi.mock('../../ui/loading/loading', () => ({
  default: () => <div>Loading...</div>,
}));

vi.mock('../../component/about/about-component', () => ({
  default: () => <div>AboutComponent</div>,
}));

describe('Welcome', () => {
  it('renders the loading component when loading is true', () => {
    (useAuth as Mock).mockReturnValue({
      user: null,
      loading: true,
    });

    (useTranslation as Mock).mockReturnValue({
      t: (key: string) => key,
    });

    const { getByText } = render(<WelcomeComponent />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders welcome message and authenticated buttons when user is logged in', () => {
    (useAuth as Mock).mockReturnValue({
      user: { displayName: 'John Doe' },
      loading: false,
    });
    (useTranslation as Mock).mockReturnValue({
      t: (key: string) => (key === 'WelcomeBack' ? 'Welcome Back' : key),
    });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <WelcomeComponent />
      </MemoryRouter>,
    );
    expect(getByText('Welcome Back, John Doe!')).toBeInTheDocument();

    expect(getByText('RESTClient')).toBeInTheDocument();
    expect(getByText('GraphiQLClient')).toBeInTheDocument();
    expect(getByText('History')).toBeInTheDocument();
  });
  it('renders welcome message and sign-in/sign-up buttons when user is not logged in', () => {
    (useAuth as Mock).mockReturnValue({
      user: null,
      loading: false,
    });

    (useTranslation as Mock).mockReturnValue({
      t: (key: string) => (key === 'Welcome' ? 'Welcome' : key),
    });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <WelcomeComponent />
      </MemoryRouter>,
    );

    expect(getByText('Welcome!')).toBeInTheDocument();
    expect(getByText('SignIn')).toBeInTheDocument();
    expect(getByText('SignUp')).toBeInTheDocument();
  });
});
