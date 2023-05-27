import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  upcomingMovies: null,
  error: null,
  isLoadingUpcoming: true,
};

const upcomingMoviesSlice = createSlice({
  name: 'upcoming/movies',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'upcoming/fetchData/pending',

      state => {
        state.isLoadingUpcoming = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'upcoming/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingUpcoming = false;
        state.upcomingMovies = action.payload.results;
      }
    );
    builder.addMatcher(
      action => action.type === 'upcoming/fetchData/rejected',

      (state, action) => {
        state.isLoadingUpcoming = false;
        state.error = action.error.message;
      }
    );
  },
});

export default upcomingMoviesSlice;
