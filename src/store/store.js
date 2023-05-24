import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './slices/home-slice';
import SwitchTabSlice from './slices/switch-tab-slice';
import trendingSlice from './slices/data-slice';

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    switchTab: SwitchTabSlice.reducer,
    trending: trendingSlice.reducer,
  },
});

export default store;
