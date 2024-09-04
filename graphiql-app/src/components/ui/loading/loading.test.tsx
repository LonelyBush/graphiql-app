import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loading from './loading';

describe('Loading component', () => {
  it('renders without crashing', () => {
    render(<Loading />);
    const loaderContainer = screen.getByRole('status');
    expect(loaderContainer).toBeInTheDocument();
  });
});
