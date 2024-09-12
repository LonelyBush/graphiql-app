import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { useNavigate } from '@remix-run/react';
import { ToastContainer } from 'react-toastify';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import useAuth from '../../../utils/hooks/useAuth-hook';
import SignUpForm from './sign-up-form';
import { registerWithEmailAndPassword } from '../../../utils/firebase-auth/firebase';

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
  registerWithEmailAndPassword: vi.fn(),
}));
vi.mock('@remix-run/react', () => ({
  useNavigate: vi.fn(),
}));

describe('Sign up form component', () => {
  const mockNavigate = vi.fn();
  beforeEach(() => {
    vi.resetAllMocks();
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useAuth as Mock).mockReturnValue({ user: null, loading: false });
  });
  it('renders form fields and submit button', () => {
    const { getByText, getByRole } = render(<SignUpForm />);
    expect(getByText('Nickname')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByText('ConfirmPassword')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('renders forms error on submit empty form', async () => {
    const { getByRole } = render(<SignUpForm />);
    userEvent.click(getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(screen.getByText('EmailRequired')).toBeInTheDocument();
      expect(screen.getByText('NicknameRequired')).toBeInTheDocument();
      expect(screen.getByText('PasswordRequired')).toBeInTheDocument();
      expect(screen.getByText('ConfirmPassword')).toBeInTheDocument();
    });
  });

  it('displays error toast if login fails', async () => {
    (registerWithEmailAndPassword as Mock).mockRejectedValueOnce(
      new Error('authError'),
    );

    const { getByRole, getByPlaceholderText, getByText } = renderWithToastify(
      <SignUpForm />,
    );
    await userEvent.type(getByPlaceholderText('JohnDoe'), 'JohnDoe');
    await userEvent.type(
      getByPlaceholderText('example@gmail.com'),
      'barbara4@mail.com',
    );
    await userEvent.type(getByPlaceholderText('Password'), '!Qwer2333');
    await userEvent.type(getByPlaceholderText('ConfirmPassword'), '!Qwer2333');
    userEvent.click(getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(getByText('unexpectedError')).toBeInTheDocument();
    });
  });

  it('displays succesfull message when success sign up ', async () => {
    (registerWithEmailAndPassword as Mock).mockResolvedValueOnce({
      user: { email: 'barbara4@mail.com', nickname: 'JohnDoe' },
    });

    const { getByRole, getByPlaceholderText, getByText } = renderWithToastify(
      <SignUpForm />,
    );
    await userEvent.type(getByPlaceholderText('JohnDoe'), 'JohnDoe');
    await userEvent.type(
      getByPlaceholderText('example@gmail.com'),
      'barbara4@mail.com',
    );
    await userEvent.type(getByPlaceholderText('Password'), '!Qwer2333');
    await userEvent.type(getByPlaceholderText('ConfirmPassword'), '!Qwer2333');
    userEvent.click(getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(getByText('accessGranted')).toBeInTheDocument();
    });
  });

  it('displays loading component when loading is true', () => {
    (useAuth as Mock).mockReturnValueOnce({ user: null, loading: true });

    const { getByRole } = render(<SignUpForm />);

    expect(getByRole('status')).toBeInTheDocument();
  });

  it('redirects user if already authenticated', () => {
    (useAuth as Mock).mockReturnValueOnce({
      user: { displayName: 'JohnDoe' },
      loading: false,
    });

    render(<SignUpForm />);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
