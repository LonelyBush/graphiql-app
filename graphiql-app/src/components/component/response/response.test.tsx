import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Response from './response';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('Response component', () => {
  const mockTitle = 'Test Title';
  const mockResponse = '{ "message": "success" }';
  const mockError = 'Server error';

  it('renders title correctly', () => {
    render(
      <Response
        title={mockTitle}
        responseStatus={200}
        response={mockResponse}
        error={null}
      />,
    );
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it('displays no response message when there is no response', () => {
    render(
      <Response
        title={mockTitle}
        responseStatus={null}
        response=""
        error={null}
      />,
    );

    expect(screen.getByText('NoResponse')).toBeInTheDocument();
  });

  it('displays response status correctly', () => {
    render(
      <Response
        title={mockTitle}
        responseStatus={200}
        response={mockResponse}
        error={null}
      />,
    );

    expect(screen.getByText('status: 200')).toBeInTheDocument();
  });

  it('displays error message when error is present', () => {
    render(
      <Response
        title={mockTitle}
        responseStatus={null}
        response=""
        error={mockError}
      />,
    );

    expect(screen.getByText('Error:')).toBeInTheDocument();
  });
});
