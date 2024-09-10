import { describe, it, expect } from 'vitest';
import graphiQLLinksReducer, {
  addGraphiQLLinks,
} from './graphiql-history-slice';

describe('graphiQLLinksSlice', () => {
  it('should have the correct initial state', () => {
    const initialState = {
      graphiQLLinks: [],
    };
    const state = graphiQLLinksReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should handle addGraphiQLLinks', () => {
    const initialState = {
      graphiQLLinks: [],
    };
    const newLinks = ['link1', 'link2'];
    const state = graphiQLLinksReducer(
      initialState,
      addGraphiQLLinks(newLinks),
    );

    expect(state.graphiQLLinks).toEqual([newLinks]);
  });

  it('should handle multiple addGraphiQLLinks calls', () => {
    const initialState = {
      graphiQLLinks: [['link1']],
    };
    const newLinks1 = ['link2'];
    const newLinks2 = ['link3'];
    let state = graphiQLLinksReducer(initialState, addGraphiQLLinks(newLinks1));
    state = graphiQLLinksReducer(state, addGraphiQLLinks(newLinks2));

    expect(state.graphiQLLinks).toEqual([['link1'], ['link2'], ['link3']]);
  });
});
