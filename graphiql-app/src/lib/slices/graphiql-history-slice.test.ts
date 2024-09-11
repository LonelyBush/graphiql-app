import { describe, it, expect } from 'vitest';
import graphiQLLinksReducer, {
  addGraphiQLLinks,
} from './graphiql-history-slice';
import { GraphiQLLinksState, RequestItem } from '../../types/interface';

describe('graphiQLLinksSlice', () => {
  const initialState: GraphiQLLinksState = {
    graphiQLLinks: [],
  };

  it('should return the initial state', () => {
    const state = graphiQLLinksReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should handle addgraphiQLLinks', () => {
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

    const action = addGraphiQLLinks(newLinks);
    const state = graphiQLLinksReducer(initialState, action);

    expect(state.graphiQLLinks).toEqual(newLinks);
  });

  it('should handle multiple addGraphiQLLinks calls', () => {
    const initialStateWithLinks: GraphiQLLinksState = {
      graphiQLLinks: [
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

    const action = addGraphiQLLinks(newLinks);
    const state = graphiQLLinksReducer(initialStateWithLinks, action);

    expect(state.graphiQLLinks).toEqual([
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
