import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RegistrationPage from '../registration';

vi.mock('../../../components/base/sign-up-form/sign-up-form', () => ({
  default: () => <div>SignUpForm Component</div>,
}));

describe('SignUpForm Component', () => {
  it('renders the SignUpFormComponent inside a styled container', () => {
    render(<RegistrationPage />);
    expect(screen.getByText('SignUpForm Component')).toBeInTheDocument();
  });
});
