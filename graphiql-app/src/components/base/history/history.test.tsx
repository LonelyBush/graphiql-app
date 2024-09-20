import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../utils/launguages/i18n';
import History from './history';
import useAuth from '../../../utils/hooks/useAuth-hook';
import { AppState, RequestItem } from '../../../types/interface';
import resources from '../../../utils/launguages/launguages-text';

vi.mock('../../../utils/hooks/useAuth-hook');

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

describe('History Component', () => {
  const createTestStore = (state: AppState) => createStore(() => state);

  it('renders correctly when no user is authenticated', () => {
    (useAuth as Mock).mockReturnValue({ user: null, loading: false });
    const store = createTestStore({
      language: { language: 'en' },
      restLinks: { restLinks: [] },
      graphiQLLinks: { graphiQLLinks: [] },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <History />
          </I18nextProvider>
        </MemoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(resources.en.translation.NoHistory),
    ).toBeInTheDocument();
    expect(
      screen.getByText(resources.en.translation.RESTClient),
    ).toBeInTheDocument();
    expect(
      screen.getByText(resources.en.translation.GraphiQLClient),
    ).toBeInTheDocument();
  });

  it('renders correctly when user is authenticated and no history exists', () => {
    (useAuth as Mock).mockReturnValue({
      user: { id: 1, name: 'John Doe' },
      loading: false,
    });
    const store = createTestStore({
      language: { language: 'en' },
      restLinks: { restLinks: [] },
      graphiQLLinks: { graphiQLLinks: [] },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <History />
          </I18nextProvider>
        </MemoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(resources.en.translation.NoHistory),
    ).toBeInTheDocument();
  });

  it('renders correctly with history data', () => {
    (useAuth as Mock).mockReturnValue({
      user: { id: 1, name: 'John Doe' },
      loading: false,
    });
    const store = createTestStore({
      language: { language: 'en' },
      restLinks: { restLinks: [mockRestLink] },
      graphiQLLinks: { graphiQLLinks: [mockGraphiQLLink] },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <History />
          </I18nextProvider>
        </MemoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(resources.en.translation.HistoryRequests),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockRestLink.requestData.method),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockGraphiQLLink.requestData.method),
    ).toBeInTheDocument();
    expect(screen.getByText(mockRestLink.requestData.url)).toBeInTheDocument();
    expect(
      screen.getByText(mockGraphiQLLink.requestData.url),
    ).toBeInTheDocument();
  });
});
