import { describe, it, expect } from 'vitest';
import restLinksReducer, { addRestLinks } from './rest-history-slice';

describe('restLinksSlice', () => {
  it('should have the correct initial state', () => {
    const initialState = {
      restLinks: [],
    };
    const state = restLinksReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should handle addRestLinks', () => {
    const initialState = {
      restLinks: [],
    };
    const newLinks = ['link1', 'link2'];
    const state = restLinksReducer(initialState, addRestLinks(newLinks));

    expect(state.restLinks).toEqual([newLinks]);
  });

  it('should handle multiple addRestLinks calls', () => {
    const initialState = {
      restLinks: [['link1']],
    };
    const newLinks1 = ['link2'];
    const newLinks2 = ['link3'];
    let state = restLinksReducer(initialState, addRestLinks(newLinks1));
    state = restLinksReducer(state, addRestLinks(newLinks2));

    expect(state.restLinks).toEqual([['link1'], ['link2'], ['link3']]);
  });
});
