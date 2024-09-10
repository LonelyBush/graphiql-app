import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import WelcomePage from '../_index';

vi.mock('../../../components/base/welcome/welcome', () => ({
  default: () => <div>Welcome Component</div>,
}));

describe('WelcomePage Component', () => {
  it('renders the WelcomeComponent inside a styled container', () => {
    render(<WelcomePage />);
    expect(screen.getByText('Welcome Component')).toBeInTheDocument();
  });
});
