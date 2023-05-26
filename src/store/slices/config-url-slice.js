import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  configUrl: {
    backdrop: null,
    poster: null,
    profile: null,
  },
  error: null,
  isLoadingUrl: true,
};

const configUrlSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'config/fetchData/pending',
      state => {
        state.isLoadingUrl = true;
      }
    );

    builder.addMatcher(
      action => action.type === 'config/fetchData/fulfilled',
      (state, action) => {
        state.isLoadingUrl = false;
        state.configUrl.backdrop = `${action.payload.images.secure_base_url}original`;
        state.configUrl.poster = `${action.payload.images.secure_base_url}original`;
        state.configUrl.profile = `${action.payload.images.secure_base_url}original`;
      }
    );
    builder.addMatcher(
      action => action.type === 'config/fetchData/rejected',
      (state, action) => {
        state.isLoadingUrl = false;
        state.error = action.error.message;
      }
    );
  },
});

export default configUrlSlice;
