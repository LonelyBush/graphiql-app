import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorBoundaryComponent from './error-boundary';

const MockComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders the fallback UI when there is an error', () => {
    render(
      <MemoryRouter>
        <ErrorBoundaryComponent>
          <MockComponent />
        </ErrorBoundaryComponent>
      </MemoryRouter>,
    );

    expect(screen.getByText('ErrorMessage')).toBeInTheDocument();
    expect(screen.getByText('BackToMain')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'BackToMain' }),
    ).toBeInTheDocument();
  });

  it('renders the children when there is no error', () => {
    render(
      <MemoryRouter>
        <ErrorBoundaryComponent>
          <div>Child Component</div>
        </ErrorBoundaryComponent>
      </MemoryRouter>,
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
