import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  discover: { results: [] },
  // filtered: { results: [] },
  error: null,
  isLoadingDiscover: true,
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    clear: state =>{
      return { ...state, discover: { results: [] } };
    },
  },

  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'discover/fetchData/pending',
      state => {
        state.isLoadingDiscover = true;
      }
    );

    builder.addMatcher(
      action => action.type === 'discover/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingDiscover = false;
        state.discover = {
          page: action.payload.page,
          total_results: action.payload.total_results,
          total_pages: action.payload.total_pages,
          results: [...state.discover.results, ...action.payload.results],
        };
      }
    );
    builder.
    addMatcher(
      action => action.type === 'discover/fetchData/rejected',
      (state, action) => {
        state.isLoadingDiscover = false;
        state.error = action.error.message;
      }
    );
  },
});

export default discoverSlice;
export const discoverActions = discoverSlice.actions;
