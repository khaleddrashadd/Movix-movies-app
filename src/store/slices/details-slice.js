import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: null,
  error: null,
  isLoadingDetails: true,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'details/fetchData/pending',

      state => {
        state.isLoadingDetails = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'details/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingDetails = false;
        state.details = action.payload;
      }
    );
    builder.addMatcher(action => action.type === 'details/fetchData/rejected'),
      (state, action) => {
        state.isLoadingDetails = false;
        state.error = action.error.message;
      };
  },
});

export default detailsSlice;
