import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Jsonify } from '@remix-run/server-runtime/dist/jsonify';
import BodyHeadersTabs from './rest-body-headers';

const mockSetBody = vi.fn();
const mockSetHeaders = vi.fn();
const mockNavigate = vi.fn();
const mockLocation = { search: '' };
type Params<T> = {
  [key: string]: T;
};

vi.mock('@monaco-editor/react', () => ({
  Editor: ({ onChange }: { onChange: (value: string) => void }) => {
    return (
      <textarea
        data-testid="monaco-editor"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  },
}));

vi.mock('@remix-run/react', () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

vi.mock('@remix-run/react', () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

vi.mock('../../../utils/const/base64', () => ({
  encodeToBase64: vi.fn().mockReturnValue('encodedValue'),
  decodeToString: vi.fn().mockReturnValue('decodedValue'),
}));

describe('BodyHeadersTabs', () => {
  it('renders Body tab and Headers tab', () => {
    render(
      <BodyHeadersTabs
        setBody={mockSetBody}
        setHeaders={mockSetHeaders}
        params={{ '*': 'some/path' } as Jsonify<Params<string>>}
      />,
    );

    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Headers')).toBeInTheDocument();
  });

  it('calls setBody when the editor content changes', async () => {
    render(
      <BodyHeadersTabs
        setBody={mockSetBody}
        setHeaders={mockSetHeaders}
        params={{ '*': 'some/path' } as Jsonify<Params<string>>}
      />,
    );
    const editor = await screen.findByTestId('monaco-editor');
    fireEvent.change(editor, { target: { value: 'new body content' } });
    expect(mockSetBody).toHaveBeenCalledWith('new body content');
  });

  it('navigates to error page if params contain more than 2 segments', () => {
    render(
      <BodyHeadersTabs
        setBody={mockSetBody}
        setHeaders={mockSetHeaders}
        params={{ '*': 'a/b/c' } as Jsonify<Params<string>>}
      />,
    );

    expect(mockNavigate).toHaveBeenCalledWith('/errorPage');
  });

  it('navigates on blur event', async () => {
    render(
      <BodyHeadersTabs
        setBody={mockSetBody}
        setHeaders={mockSetHeaders}
        params={{ '*': 'some/path' } as Jsonify<Params<string>>}
      />,
    );
    const editorWrapper = await screen.findByTestId('editorWrapper');
    fireEvent.blur(editorWrapper);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
