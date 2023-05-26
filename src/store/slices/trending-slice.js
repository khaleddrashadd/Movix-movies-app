import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trendingMovies: null,
  isLoading: true,
};

const trendingDataSlice = createSlice({
  name: 'trending/data',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'trending/fetchData/pending',
      state => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'trending/fetchData/fulfilled',
      (state, action) => {
        state.isLoading = false;
        state.trendingMovies = action.payload.results;
      }
    );
    builder.addMatcher(
      action => action.type === 'trending/fetchData/rejected',
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }
    );
  },
});

export default trendingDataSlice;
