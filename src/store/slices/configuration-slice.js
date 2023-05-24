import { createSlice } from '@reduxjs/toolkit';
import { fetchConfigurationData } from "../actions/configuration-actions";

const initialState = 

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchConfigurationData.pending,(state)=>{});
    builder.addCase(fetchConfigurationData.fulfilled, state => {});
    builder.addCase(fetchConfigurationData.rejected, state => {});
  },
});

export default configurationSlice;
export const configurationAction = configurationSlice.actions;
