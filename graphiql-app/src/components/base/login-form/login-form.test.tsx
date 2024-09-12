import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { useNavigate } from '@remix-run/react';
import { ToastContainer } from 'react-toastify';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import LoginForm from './login-form';
import useAuth from '../../../utils/hooks/useAuth-hook';
import { logInWithEmailAndPassword } from '../../../utils/firebase-auth/firebase';

const renderWithToastify = (component: ReactNode) => {
  return render(
    <div>
      <ToastContainer />
      {component}
    </div>,
  );
};
vi.mock('../../../utils/hooks/useAuth-hook');
vi.mock('../../../utils/firebase-auth/firebase', () => ({
  logInWithEmailAndPassword: vi.fn(),
}));
vi.mock('@remix-run/react', () => ({
  useNavigate: vi.fn(),
}));
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('LoginForm Component', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useAuth as Mock).mockReturnValue({ user: null, loading: false });
  });
  it('renders form fields and submit button', () => {
    const { getByText, getByRole } = render(<LoginForm />);
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('renders forms error on submit empty form', async () => {
    const { getByRole } = render(<LoginForm />);
    userEvent.click(getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(screen.getByText('EmailRequired')).toBeInTheDocument();
      expect(screen.getByText('PasswordRequired')).toBeInTheDocument();
    });
  });

  it('calls login function on form submission', async () => {
    const { getByRole, getByPlaceholderText } = render(<LoginForm />);
    await userEvent.type(
      getByPlaceholderText('example@gmail.com'),
      'barbara4@mail.com',
    );
    await userEvent.type(getByPlaceholderText(''), '!Qwer2333');

    userEvent.click(getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(logInWithEmailAndPassword).toHaveBeenCalledWith(
        'barbara4@mail.com',
        '!Qwer2333',
      );
    });
  });

  it('displays error toast if login fails', async () => {
    (logInWithEmailAndPassword as Mock).mockRejectedValueOnce(
      new Error('authError'),
    );

    const { getByRole, getByPlaceholderText, getByText } = renderWithToastify(
      <LoginForm />,
    );

    await userEvent.type(
      getByPlaceholderText('example@gmail.com'),
      'barbara4@mail.com',
    );
    await userEvent.type(getByPlaceholderText(''), '!Qwer2333');
    fireEvent.click(getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(getByText('unexpectedError')).toBeInTheDocument();
    });
  });

  it('displays loading toast when pending', async () => {
    (logInWithEmailAndPassword as Mock).mockResolvedValueOnce({
      user: { email: 'barbara4@mail.com' },
    });

    const { getByRole, getByPlaceholderText, getByText } = renderWithToastify(
      <LoginForm />,
    );

    await userEvent.type(
      getByPlaceholderText('example@gmail.com'),
      'barbara4@mail.com',
    );
    await userEvent.type(getByPlaceholderText(''), '!Qwer23');
    fireEvent.click(getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(getByText('accessGranted')).toBeInTheDocument();
    });
  });
  it('redirects user if already authenticated', () => {
    (useAuth as Mock).mockReturnValueOnce({
      user: { email: 'test@example.com' },
      loading: false,
    });

    render(<LoginForm />);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('displays loading component when loading is true', () => {
    (useAuth as Mock).mockReturnValueOnce({ user: null, loading: true });

    const { getByRole } = render(<LoginForm />);

    expect(getByRole('status')).toBeInTheDocument();
  });
});
