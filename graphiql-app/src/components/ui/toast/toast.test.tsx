import { render } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';
import { describe, it, expect, vi } from 'vitest';
import Toast from './toast';
import toastProps from './toast-style-props';

vi.mock('react-toastify', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import('react-toastify');
  return {
    ...actual,
    ToastContainer: vi.fn(() => null),
    Slide: actual.Slide,
  };
});

describe('Toast Component', () => {
  it('renders ToastContainer with correct props', () => {
    render(<Toast />);
    expect(ToastContainer).toHaveBeenCalledWith(
      expect.objectContaining(toastProps),
      {},
    );
  });
});
