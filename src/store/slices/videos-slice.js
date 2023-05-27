import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: null,
  error: null,
  isLoadingVideos: true,
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'videos/fetchData/pending',

      state => {
        state.isLoadingVideos = true;
      }
    );
    builder.addMatcher(
      action => action.type === 'videos/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingVideos = false;
        state.videos = action.payload;
      }
    );
    builder.addMatcher(action => action.type === 'videos/fetchData/rejected'),
      (state, action) => {
        state.isLoadingVideos = false;
        state.error = action.error.message;
      };
  },
});

export default videosSlice;
