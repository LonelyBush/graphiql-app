import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestItem, RestLinksState } from '../../types/interface';
import { saveRequestToLocalStorage } from '../../utils/local-storage/request-ls';

const initialState: RestLinksState = {
  restLinks: [],
  //   restLinks:(typeof window !== 'undefined' && getRequestFromLocalStorage('restfull'))||[],
};

const restLinksSlice = createSlice({
  name: 'rest-links',
  initialState,
  reducers: {
    addRestLinks: (state, action: PayloadAction<RequestItem[]>) => {
      state.restLinks.push(...action.payload);
      saveRequestToLocalStorage('restfull', state.restLinks);
    },
  },
});

export const { addRestLinks } = restLinksSlice.actions;
export default restLinksSlice.reducer;
