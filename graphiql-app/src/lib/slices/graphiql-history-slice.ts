import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestItem, GraphiQLLinksState } from '../../types/interface';
import { saveRequestToLocalStorage } from '../../utils/local-storage/request-ls';

const initialState: GraphiQLLinksState = {
  graphiQLLinks: [],
};

const graphiQLLinksSlice = createSlice({
  name: 'graphiql-links',
  initialState,
  reducers: {
    addGraphiQLLinks: (state, action: PayloadAction<RequestItem[]>) => {
      state.graphiQLLinks.push(...action.payload);
      saveRequestToLocalStorage('graphiQL', state.graphiQLLinks);
    },
  },
});

export const { addGraphiQLLinks } = graphiQLLinksSlice.actions;
export default graphiQLLinksSlice.reducer;
