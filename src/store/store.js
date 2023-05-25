import { configureStore } from '@reduxjs/toolkit';
import SwitchTabSlice from './slices/switch-tab-slice';
import dataSlice from './slices/data-slice';

const store = configureStore({
  reducer: {
    switchTab: SwitchTabSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
