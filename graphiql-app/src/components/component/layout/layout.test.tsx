import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Layout from './layout';

vi.mock('../header/header', () => ({
  default: () => <div>Header</div>,
}));

const mockUseMatches = vi.fn();

vi.mock('@remix-run/react', () => ({
  useMatches: () => mockUseMatches(),
  Outlet: () => <div>Outlet</div>,
}));

describe('Layout', () => {
  beforeEach(() => {
    mockUseMatches.mockReset();
  });

  it('should render Header when isErrorPage is false', () => {
    mockUseMatches.mockReturnValue([{ handle: {} }]);

    render(<Layout />);
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Outlet')).toBeInTheDocument();
  });

  it('should not render Header when isErrorPage is true', () => {
    mockUseMatches.mockReturnValue([{ handle: { hideHeader: true } }]);

    render(<Layout />);
    expect(screen.queryByText('Header')).not.toBeInTheDocument();
    expect(screen.getByText('Outlet')).toBeInTheDocument();
  });
});
