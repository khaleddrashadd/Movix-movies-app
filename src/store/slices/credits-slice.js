import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  credits: null,
  error: null,
  isLoadingCredits: true,
};

const creditsSlice = createSlice({
  name: 'credit',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'credits/fetchData/pending',

      state => {
        state.isLoadingCredits = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'credits/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingCredits = false;
        state.credits = action.payload;
      }
    );
    builder.addMatcher(action => action.type === 'credits/fetchData/rejected'),
      (state, action) => {
        state.isLoadingCredits = false;
        state.error = action.error.message;
      };
  },
});

export default creditsSlice;
