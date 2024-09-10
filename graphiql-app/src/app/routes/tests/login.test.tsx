import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LoginPage from '../login';

vi.mock('../../../components/base/login-form/login-form', () => ({
  default: () => <div>Login Component</div>,
}));

describe('LoginPage Component', () => {
  it('renders the LoginComponent inside a styled container', () => {
    render(<LoginPage />);
    expect(screen.getByText('Login Component')).toBeInTheDocument();
  });
});
