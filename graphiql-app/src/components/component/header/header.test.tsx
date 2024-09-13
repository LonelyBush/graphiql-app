import { useAuthState } from 'react-firebase-hooks/auth';
import { createRemixStub } from '@remix-run/testing';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';
import { logout } from '../../../utils/firebase-auth/firebase';
import styles from './header.module.scss';

vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState: vi.fn(),
}));

vi.mock('../../../utils/firebase-auth/firebase', () => ({
  auth: {},
  logout: vi.fn(),
}));

vi.mock('../toggle-languages/toggle-languages', () => ({
  default: () => <div>ToggleLanguages</div>,
}));

class IntersectionObserverMock implements IntersectionObserver {
  root: Element | null = null;

  rootMargin: string = '';

  thresholds: ReadonlyArray<number> = [];

  observe = vi.fn();

  unobserve = vi.fn();

  disconnect = vi.fn();

  takeRecords = vi.fn();

  constructor(
    private callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit,
  ) {}

  trigger(entries: IntersectionObserverEntry[]) {
    this.callback(entries, this);
  }
}
describe('Header component', () => {
  let observerMock: IntersectionObserverMock;

  beforeEach(() => {
    window.scrollY = 0;
    observerMock = new IntersectionObserverMock(() => {});
    global.IntersectionObserver = vi.fn(() => observerMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  it('Renders page on default login state', () => {
    (useAuthState as Mock).mockReturnValue([null]);

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    const { getByRole, getByText } = render(
      <RemixStub initialEntries={['/']} />,
    );
    const homeLink = getByRole('link', { name: '' });
    expect(homeLink).toBeInTheDocument();

    const signUpLink = getByRole('link', { name: 'registration-btn' });
    const signInLink = getByRole('link', { name: 'login-btn' });
    expect(signUpLink).toBeInTheDocument();
    expect(signInLink).toBeInTheDocument();
    const toggleLanguages = getByText('ToggleLanguages');
    expect(toggleLanguages).toBeInTheDocument();
  });

  it('Renders log out btn while user is log in', () => {
    (useAuthState as Mock).mockReturnValue([{ uid: 'test-user' }]);
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    const { getByRole } = render(<RemixStub initialEntries={['/']} />);
    const logOutButton = getByRole('button', { name: 'Log out' });
    expect(logOutButton).toBeInTheDocument();
  });
  it('Calls logout function while clicked logout btn', async () => {
    (useAuthState as Mock).mockReturnValue([{ uid: 'test-user' }]);
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    const { getByRole } = render(<RemixStub initialEntries={['/']} />);
    const logOutButton = getByRole('button', { name: 'Log out' });
    await userEvent.click(logOutButton);
    expect(logout).toBeCalled();
  });

  it('Set active link while clicking login or registration btn', async () => {
    (useAuthState as Mock).mockReturnValue([null]);
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    const { getByRole } = render(<RemixStub initialEntries={['/']} />);
    const signUpLink = getByRole('link', { name: 'registration-btn' });
    const signInLink = getByRole('link', { name: 'login-btn' });
    await userEvent.click(signInLink);
    expect(
      signInLink.classList.contains(styles.iconSignInActive),
    ).toBeDefined();

    await userEvent.click(signUpLink);
    expect(
      signUpLink.classList.contains(styles.iconSignUpActive),
    ).toBeDefined();
  });

  it('Set default link while not do anything', async () => {
    (useAuthState as Mock).mockReturnValue([null]);
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    const { getByRole } = render(<RemixStub initialEntries={['/']} />);
    const signUpLink = getByRole('link', { name: 'registration-btn' });
    const signInLink = getByRole('link', { name: 'login-btn' });
    await userEvent.click(signInLink);
    expect(signInLink.classList.contains(styles.iconSignIn)).toBeDefined();
    await userEvent.click(signUpLink);
    expect(signUpLink.classList.contains(styles.iconSignUp)).toBeDefined();
  });

  it('Should set sticky header while scrolldown', async () => {
    (useAuthState as Mock).mockReturnValue([null]);
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    const { container } = render(<RemixStub initialEntries={['/']} />);
    const header = container.querySelector('header');
    const callback = (global.IntersectionObserver as Mock).mock.calls[0][0];
    callback([{ isIntersecting: false }]);
    expect(header?.classList.contains(styles.sticky)).toBeDefined();
  });
});
