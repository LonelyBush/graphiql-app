import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from '@remix-run/react';
import { onAuthStateChanged, User, getAuth } from 'firebase/auth';
import { AuthProvider, AuthContext } from './auth-context';

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: (
    _: { [key: string]: unknown },
    callback: (user: User | null) => void,
  ): (() => void) => {
    callback(null);
    return () => {};
  },
  getAuth: () => ({}) as unknown as ReturnType<typeof getAuth>,
}));

vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState: vi.fn(),
}));

vi.mock('@remix-run/react', () => ({
  useNavigate: () => () => {},
}));

describe('AuthProvider', () => {
  it('should provide correct context values', () => {
    const mockUser: User = { uid: 'testUserId' } as User;
    (useAuthState as unknown as () => [
      User | null | undefined,
      boolean,
      Error | undefined,
    ]) = () => [mockUser, false, undefined];
    const navigate = vi.fn();
    (useNavigate as unknown as () => () => void) = () => navigate;

    // Define TestComponent using function declaration
    function TestComponent() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            if (!value) {
              return <div>Error: Context is undefined</div>;
            }
            const { user, loading, error } = value;
            return (
              <div>
                <div data-testid="user">{user?.uid}</div>
                <div data-testid="loading">
                  {loading ? 'Loading' : 'Not Loading'}
                </div>
                <div data-testid="error">
                  {error ? error.message : 'No Error'}
                </div>
              </div>
            );
          }}
        </AuthContext.Consumer>
      );
    }

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    expect(screen.getByTestId('user')).toHaveTextContent('testUserId');
    expect(screen.getByTestId('loading')).toHaveTextContent('Not Loading');
    expect(screen.getByTestId('error')).toHaveTextContent('No Error');
  });

  it('should navigate to "/" when user is null', async () => {
    (useAuthState as unknown as () => [
      User | null | undefined,
      boolean,
      Error | undefined,
      /* eslint-disable react/function-component-definition */
    ]) = () => [null, false, undefined];
    const navigate = vi.fn();
    (useNavigate as unknown as () => () => void) = () => navigate;
    (onAuthStateChanged as unknown as (
      auth: { [key: string]: unknown },
      callback: (user: User | null) => void,
    ) => () => void) = (_, callback) => {
      callback(null);
      return () => {};
    };

    render(
      <AuthProvider>
        <div>Test Component</div>
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('/');
    });
  });
});
