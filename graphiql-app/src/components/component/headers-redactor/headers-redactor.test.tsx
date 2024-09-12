import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock, beforeEach } from 'vitest';
import { useLocation, useSearchParams } from '@remix-run/react';
import userEvent from '@testing-library/user-event';
import HeadersRedactor from './headers-redactor';

vi.mock('@remix-run/react', () => ({
  useLocation: vi.fn(),
  useSearchParams: vi.fn(),
  useNavigate: vi.fn(),
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('headers-redactor component', () => {
  const mockOuterSetHeader = vi.fn();
  const mockSetSearchParams = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useLocation as Mock).mockReturnValue({ search: '' });
    (useSearchParams as Mock).mockReturnValue([{}, mockSetSearchParams]);
  });

  it('adds a new header input row when AddHeader button is clicked', async () => {
    const { getByRole, getByText } = render(
      <HeadersRedactor outerSetHeader={mockOuterSetHeader} />,
    );
    const addButton = getByText('AddHeader');

    await userEvent.click(addButton);

    const rowBlock = getByRole('rowgroup');

    expect(rowBlock.childNodes.length).toBe(1);
  });

  it('updates the state when input values are changed', async () => {
    render(<HeadersRedactor outerSetHeader={mockOuterSetHeader} />);
    const addButton = screen.getByText('AddHeader');
    await userEvent.click(addButton);

    const keyInput = screen.getByRole('textbox', { name: 'header-key' });
    const valueInput = screen.getByRole('textbox', { name: 'header-value' });

    await userEvent.type(keyInput, 'Content-Type');
    await userEvent.type(valueInput, 'application/json');

    expect(keyInput).toHaveValue('Content-Type');
    expect(valueInput).toHaveValue('application/json');
  });
  it('deletes the header row when the trash icon is clicked', async () => {
    const { getByRole, getByText } = render(
      <HeadersRedactor outerSetHeader={mockOuterSetHeader} />,
    );
    const addButton = getByText('AddHeader');
    await userEvent.click(addButton);

    const deleteButton = getByRole('button', { name: 'trash-btn' });

    await userEvent.click(deleteButton);

    const rowBlock = getByRole('rowgroup');

    expect(rowBlock.childNodes.length).toBe(0);
  });

  it('calls outerSetHeader and setSearchParams when headers change', async () => {
    render(<HeadersRedactor outerSetHeader={mockOuterSetHeader} />);
    const addButton = screen.getByText('AddHeader');
    await userEvent.click(addButton);

    const keyInput = screen.getByRole('textbox', { name: 'header-key' });
    const valueInput = screen.getByRole('textbox', { name: 'header-value' });

    await userEvent.type(keyInput, 'Authorization');
    await userEvent.type(valueInput, 'Bearer token');

    expect(mockOuterSetHeader).toHaveBeenCalledWith(
      JSON.stringify({ Authorization: 'Bearer token' }),
    );
    expect(mockSetSearchParams).toHaveBeenCalledWith({
      Authorization: 'Bearer token',
    });
  });
});
