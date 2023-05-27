import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recommendation: null,
  error: null,
  isLoadingRecommendation: true,
};

const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'recommendation/fetchData/pending',

      state => {
        state.isLoadingRecommendation = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'recommendation/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingRecommendation = false;
        state.recommendation = action.payload;
      }
    );
    builder.addMatcher(
      action => action.type === 'recommendation/fetchData/rejected'
    ),
      (state, action) => {
        state.isLoadingRecommendation = false;
        state.error = action.error.message;
      };
  },
});

export default recommendationSlice;
