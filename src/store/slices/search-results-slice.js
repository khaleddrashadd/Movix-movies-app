import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: {results:[]},
  error: null,
  isLoadingSearch: true,
};

const searchResultsSlice = createSlice({
  name: 'search/results',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'search/fetchData/pending',

      state => {
        state.isLoadingSearch = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'search/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingSearch = false;
        state.searchResults = {
          page: action.payload.page,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          results:[...state.searchResults.results,...action.payload.results]
        };
      }
    );
    builder.addMatcher(action => action.type === 'search/fetchData/rejected'),
      (state, action) => {
        state.isLoadingSearch = false;
        state.error = action.error.message;
      };
  },
});

export default searchResultsSlice;
