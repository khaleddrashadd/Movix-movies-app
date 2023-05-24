import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  trendingMovies: null,
  upcomingMovies: null,
  error: null,
  isLoading: true,
  configUrl: {
    backdrop: null,
    poster: null,
    profile: null,
  },
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(
        action => action.type === 'trending/fetchData/pending',
        action => action.type === 'config/fetchData/pending',
        action => action.type === 'upcoming/fetchData/pending'
      ),
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
      action => action.type === 'upcoming/fetchData/fulfilled',
      (state, action) => {
        console.log(action.payload.results);
        state.isLoading = false;
        state.upcomingMovies = action.payload.results;
      }
    );
    builder.addMatcher(
      action => action.type === 'config/fetchData/fulfilled',
      (state, action) => {
        state.isLoading = false;
        state.configUrl.backdrop = `${action.payload.images.secure_base_url}original`;
        state.configUrl.poster = `${action.payload.images.secure_base_url}original`;
        state.configUrl.profile = `${action.payload.images.secure_base_url}original`;
      }
    );
    builder.addMatcher(
      isAnyOf(
        action => action.type === 'trending/rejected/pending',
        action => action.type === 'config/rejected/pending'
      ),
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }
    );
  },
});

export default trendingSlice;
export const trendingAction = trendingSlice.actions;
