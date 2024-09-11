import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestItem, RestLinksState } from '../../types/interface';

const initialState: RestLinksState = {
  restLinks: [],
};

const restLinksSlice = createSlice({
  name: 'rest-links',
  initialState,
  reducers: {
    addRestLinks: (state, action: PayloadAction<RequestItem[]>) => {
      state.restLinks.push(...action.payload);
    },
  },
});

export const { addRestLinks } = restLinksSlice.actions;
export default restLinksSlice.reducer;
