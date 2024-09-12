import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useForm } from 'react-hook-form';
import FormControl from './form-control';

vi.mock('react-icons/fa', () => {
  return {
    FaEye: () => <svg data-testid="fa-eye" />,
    FaEyeSlash: () => <svg data-testid="fa-eye-slash" />,
  };
});

function MockComponent({
  label,
  type,
  placeholder,
  name,
}: {
  type: string;
  label: string;
  name: string;
  placeholder: string;
}) {
  const { register } = useForm({ mode: 'onChange' });
  return (
    <FormControl
      type={type}
      label={label}
      register={register}
      name={name}
      placeholder={placeholder}
      error=""
    />
  );
}

describe('FormControl Component', () => {
  it('renders label and input', () => {
    render(
      <MockComponent
        type="text"
        label="Test Label"
        placeholder="Enter text"
        name="text"
      />,
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('toggles password visibility', () => {
    render(
      <MockComponent
        label="Password"
        type="password"
        placeholder="Enter password"
        name="password"
      />,
    );
    const eyeSlashIcon = screen.getByTestId('fa-eye-slash');
    expect(eyeSlashIcon).toBeInTheDocument();

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    const eyeIcon = screen.getByTestId('fa-eye');
    expect(eyeIcon).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Enter password');
    expect(inputElement).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('fa-eye-slash')).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
  });
});
