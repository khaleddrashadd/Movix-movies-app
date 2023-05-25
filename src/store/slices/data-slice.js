import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  trendingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  error: null,
  isLoading: true,
  configUrl: {
    backdrop: null,
    poster: null,
    profile: null,
  },
  tvGenres: null,
  movieGenres: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(
        action => action.type === 'trending/fetchData/pending',
        action => action.type === 'popular/fetchData/pending',
        action => action.type === 'topRated/fetchData/pending',
        action => action.type === 'config/fetchData/pending',
        action => action.type === 'upcoming/fetchData/pending',
        action => action.type === 'tv/genres/fetchData/pending',
        action => action.type === 'movie/genres/fetchData/pending'
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
      action => action.type === 'popular/fetchData/fulfilled',
      (state, action) => {
        state.isLoading = false;
        state.popularMovies = action.payload.results;
      }
    );
    builder.addMatcher(
      action => action.type === 'topRated/fetchData/fulfilled',
      (state, action) => {
        state.isLoading = false;
        state.topRatedMovies = action.payload.results;
      }
    );
    builder.addMatcher(
      action => action.type === 'upcoming/fetchData/fulfilled',
      (state, action) => {
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
      action => action.type === 'tv/genres/fetchData/fulfilled',
      (state, action) => {
        const genresData = action.payload.genres;
        const transformedGenres = {};
        genresData.forEach(genre => (transformedGenres[genre?.id] = genre));
        state.isLoading = false;
        state.tvGenres = transformedGenres;
      }
    );
    builder.addMatcher(
      action => action.type === 'movie/genres/fetchData/fulfilled',
      (state, action) => {
        const genresData = action.payload.genres;
        const transformedGenres = {};
        genresData.forEach(genre => (transformedGenres[genre?.id] = genre));
        state.isLoading = false;
        state.movieGenres = transformedGenres;
      }
    );
    builder.addMatcher(
      isAnyOf(
        action => action.type === 'trending/fetchData/rejected',
        action => action.type === 'popular/fetchData/rejected',
        action => action.type === 'topRated/fetchData/rejected',
        action => action.type === 'config/fetchData/rejected',
        action => action.type === 'upcoming/fetchData/rejected',
        action => action.type === 'tv/genres/fetchData/rejected',
        action => action.type === 'movie/genres/fetchData/rejected'
      ),
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }
    );
  },
});

export default dataSlice;
