import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Button from './button';

describe('Button component', () => {
  it('should render the button with correct text', () => {
    render(
      <MemoryRouter>
        <Button btnType="button">Click Me</Button>
      </MemoryRouter>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('should trigger the click event', () => {
    const handleClick = vi.fn();
    render(
      <MemoryRouter>
        <Button btnType="button" onClick={handleClick}>
          Click Me
        </Button>
      </MemoryRouter>,
    );
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
