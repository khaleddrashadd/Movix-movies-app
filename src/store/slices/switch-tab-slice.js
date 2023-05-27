import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTrendingTab: 'day',
  selectedPopularTab: 'movie',
  selectedTopRatedTab: '',
  left: 0,
};

const SwitchTabSlice = createSlice({
  name: 'switch/tab',
  initialState,
  reducers: {
    trendingTab: (state, action) => {
      state.selectedTrendingTab = action.payload.toLowerCase();
    },
    popularTab: (state, action) => {
      action.payload === 'Movies'
        ? (state.selectedPopularTab = 'movie')
        : (state.selectedPopularTab = 'tv');
    },
    topRatedTab: (state, action) => {
      state.selectedTopRatedTab = action.payload.toLowerCase();
    },
    translate: (state, action) => {
      state.left = action.payload * 100;
    },
  },
});

export default SwitchTabSlice;
export const switchTabAction = SwitchTabSlice.actions;
