import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  isLoading: true,
  tvGenres: null,
  movieGenres: null,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(
        action => action.type === 'tv/genres/fetchData/pending',
        action => action.type === 'movie/genres/fetchData/pending'
      ),
      state => {
        state.isLoading = true;
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

export default genresSlice;
