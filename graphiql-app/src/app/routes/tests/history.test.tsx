import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HistoryPage from '../history';

vi.mock('../../../components/base/history/history', () => ({
  default: () => <div>History Component</div>,
}));

describe('History Component', () => {
  it('renders the HistoryComponent inside a styled container', () => {
    render(<HistoryPage />);
    expect(screen.getByText('History Component')).toBeInTheDocument();
  });
});
