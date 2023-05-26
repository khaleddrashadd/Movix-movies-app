import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMovies: null,
  error: null,
  isLoading: true,
};

const popularSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'popular/fetchData/pending',

      state => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'popular/fetchData/fulfilled',
      (state, action) => {
        state.isLoading = false;
        state.popularMovies = action.payload.results;
      }
    );
    builder.addMatcher(action => action.type === 'popular/fetchData/rejected'),
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      };
  },
});

export default popularSlice;
