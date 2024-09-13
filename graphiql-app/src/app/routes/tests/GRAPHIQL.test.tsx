import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GraphiQLPage from '../GRAPHIQL';

vi.mock('../../../components/base/graphiql-client/graphiql-client', () => ({
  default: () => <div>GraphiQL Component</div>,
}));

describe('GraphiQL Component', () => {
  it('renders the GraphiQLComponent inside a styled container', () => {
    render(<GraphiQLPage />);
    expect(screen.getByText('GraphiQL Component')).toBeInTheDocument();
  });
});
