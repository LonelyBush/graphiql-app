import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RestLinksState {
  restLinks: string[][];
}

const initialState: RestLinksState = {
  restLinks: [],
};

const restLinksSlice = createSlice({
  name: 'rest-links',
  initialState,
  reducers: {
    addRestLinks: (state, action: PayloadAction<string[]>) => {
      state.restLinks.push(action.payload);
    },
  },
});

export const { addRestLinks } = restLinksSlice.actions;
export default restLinksSlice.reducer;
