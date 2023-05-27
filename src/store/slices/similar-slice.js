import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  similar: null,
  error: null,
  isLoadingSimilar: true,
};

const similarSlice = createSlice({
  name: 'similar',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'similar/fetchData/pending',

      state => {
        state.isLoadingSimilar = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'similar/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingSimilar = false;
        state.similar = action.payload;
      }
    );
    builder.addMatcher(action => action.type === 'similar/fetchData/rejected'),
      (state, action) => {
        state.isLoadingSimilar = false;
        state.error = action.error.message;
      };
  },
});

export default similarSlice;
