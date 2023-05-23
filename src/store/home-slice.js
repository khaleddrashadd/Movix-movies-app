import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: {},
  genres: {},
};

const homeSlice = createSlice({
  name: 'home slice',
  initialState,
  reducers: {
    getApiConfig: (state, action) => {
      state.url = action.payload;
    },
    genres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export default homeSlice;
export const homeActions = homeSlice.actions;
