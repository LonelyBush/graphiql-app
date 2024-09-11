import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GraphiQLLinksState } from '../../types/interface';

const initialState: GraphiQLLinksState = {
  graphiQLLinks: [],
};

const graphiQLLinksSlice = createSlice({
  name: 'graphiql-links',
  initialState,
  reducers: {
    addGraphiQLLinks: (state, action: PayloadAction<string[]>) => {
      state.graphiQLLinks.push(action.payload);
    },
  },
});

export const { addGraphiQLLinks } = graphiQLLinksSlice.actions;
export default graphiQLLinksSlice.reducer;
