import { describe, it, expect } from 'vitest';
import restLinksReducer, { addRestLinks } from './rest-history-slice';
import { RestLinksState, RequestItem } from '../../types/interface';

describe('restLinksSlice', () => {
  const initialState: RestLinksState = {
    restLinks: [],
  };

  it('should return the initial state', () => {
    const state = restLinksReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should handle addRestLinks', () => {
    const newLinks: RequestItem[] = [
      {
        urlPage: 'http://example.com/api/1',
        requestData: {
          url: 'http://example.com/api/1',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: 'query1' }),
        },
        data: 'result1',
      },
      {
        urlPage: 'http://example.com/api/2',
        requestData: {
          url: 'http://example.com/api/2',
          method: 'GET',
          headers: {
            Authorization: 'Bearer token',
          },
          query: 'query2',
        },
        data: 'result2',
      },
    ];

    const action = addRestLinks(newLinks);
    const state = restLinksReducer(initialState, action);

    expect(state.restLinks).toEqual(newLinks);
  });

  it('should handle multiple addRestLinks calls', () => {
    const initialStateWithLinks: RestLinksState = {
      restLinks: [
        {
          urlPage: 'http://example.com/api/1',
          requestData: {
            url: 'http://example.com/api/1',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: 'query1' }),
          },
          data: 'result1',
        },
      ],
    };

    const newLinks: RequestItem[] = [
      {
        urlPage: 'http://example.com/api/2',
        requestData: {
          url: 'http://example.com/api/2',
          method: 'POST',
          headers: {
            Authorization: 'Bearer token',
          },
          body: JSON.stringify({ query: 'query2' }),
        },
        data: 'result2',
      },
      {
        urlPage: 'http://example.com/api/3',
        requestData: {
          url: 'http://example.com/api/3',
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          query: 'query3',
        },
        data: 'result3',
      },
    ];

    const action = addRestLinks(newLinks);
    const state = restLinksReducer(initialStateWithLinks, action);

    expect(state.restLinks).toEqual([
      {
        urlPage: 'http://example.com/api/1',
        requestData: {
          url: 'http://example.com/api/1',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: 'query1' }),
        },
        data: 'result1',
      },
      {
        urlPage: 'http://example.com/api/2',
        requestData: {
          url: 'http://example.com/api/2',
          method: 'POST',
          headers: {
            Authorization: 'Bearer token',
          },
          body: JSON.stringify({ query: 'query2' }),
        },
        data: 'result2',
      },
      {
        urlPage: 'http://example.com/api/3',
        requestData: {
          url: 'http://example.com/api/3',
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          query: 'query3',
        },
        data: 'result3',
      },
    ]);
  });
});
