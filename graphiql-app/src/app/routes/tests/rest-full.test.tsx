import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RESTFullPage from '../rest-full';

vi.mock('../../../components/base/rest-full-client/rest-full-client', () => ({
  default: () => <div>RESTFullClient Component</div>,
}));

describe('RESTFullClient Component', () => {
  it('renders the RESTFullClientComponent inside a styled container', () => {
    render(<RESTFullPage />);
    expect(screen.getByText('RESTFullClient Component')).toBeInTheDocument();
  });
});
