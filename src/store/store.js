import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home-slice';
import SwitchTabSlice from './switch-tab-slice';

const store = configureStore({
  reducer: { home: homeSlice.reducer, switchTab: SwitchTabSlice.reducer },
});

export default store;
