import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTab: 'day',
  left: 0,
};

const SwitchTabSlice = createSlice({
  name: 'switch tab slice',
  initialState,
  reducers: {
    getTab: (state, action) => {
      state.selectedTab = action.payload.toLowerCase();
    },
    translate: (state, action) => {
      state.left = action.payload * 100;
    },
  },
});

export default SwitchTabSlice;
export const switchTabAction = SwitchTabSlice.actions;
