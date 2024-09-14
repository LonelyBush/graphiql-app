import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RESTFullPage from '../REST.$method.$';
import { AppState, RequestItem } from '../../../types/interface';

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

vi.mock('@remix-run/react', async (importOriginal) => {
  const actual = (await importOriginal()) as { [key: string]: unknown };
  return {
    ...actual,
    useActionData: () => ({
      data: {},
      status: null,
      error: null,
    }),
    useNavigate: () => vi.fn(),
    useParams: () => ({ method: 'GET', '*': 'test-url' }),
    useLocation: () => ({ pathname: '/REST/GET/test-url', search: '' }),
    Form: (props: FormProps) => <form {...props} />,
  };
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockRestLink: RequestItem = {
  urlPage: 'GET',
  requestData: {
    url: 'https://example.com',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'value' }),
    values: { exampleKey: 'exampleValue' },
    sdlUrl: 'https://example.com/sdl',
    query: '{ exampleQuery }',
    variables: JSON.stringify({ var1: 'value1' }),
  },
  data: '2024-09-14T12:00:00Z',
};

const mockGraphiQLLink: RequestItem = {
  urlPage: 'POST',
  requestData: {
    url: 'https://examplegraphql.com',
    method: 'POST',
    headers: { Authorization: 'Bearer token' },
    body: JSON.stringify({ query: '{ exampleGraphQLQuery }' }),
    values: { anotherKey: 12345 },
    sdlUrl: 'https://examplegraphql.com/sdl',
    query: '{ exampleGraphQLQuery }',
    variables: JSON.stringify({ var2: 'value2' }),
  },
  data: '2024-09-14T13:00:00Z',
};

const createTestStore = (state: AppState) => createStore(() => state);
const store = createTestStore({
  language: { language: 'en' },
  restLinks: { restLinks: [mockRestLink] },
  graphiQLLinks: { graphiQLLinks: [mockGraphiQLLink] },
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/REST/GET/test-url']}>
        <Routes>
          <Route path="/REST/:method/*" element={ui} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
};

describe('RESTFullPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<RESTFullPage />);
    expect(screen.getByText('RESTClient')).toBeInTheDocument();
  });

  it('should update URL input value', async () => {
    renderWithProviders(<RESTFullPage />);
    const urlInput = screen.getByRole('textbox');
    fireEvent.change(urlInput, { target: { value: 'http://example.com' } });
    await waitFor(() => expect(urlInput).toHaveValue('http://example.com'));
  });

  it('should submit the form', async () => {
    renderWithProviders(<RESTFullPage />);
    const submitButton = screen.getByRole('button', { name: 'Send' });
    fireEvent.click(submitButton);
  });
});
