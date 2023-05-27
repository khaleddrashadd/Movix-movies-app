import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topRatedMovies: null,
  error: null,
  isLoading: true,
};

const topRatedSlice = createSlice({
  name: 'top/rated',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'topRated/fetchData/pending',

      state => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'topRated/fetchData/fulfilled',
      (state, action) => {
        state.isLoading = false;
        state.topRatedMovies = action.payload.results;
      }
    );
    builder.addMatcher(action => action.type === 'topRated/fetchData/rejected'),
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      };
  },
});

export default topRatedSlice;
