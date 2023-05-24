import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/api';

export const fetchConfigurationData = createAsyncThunk(
  'configuration/fetchData',
  async url => {
    try {
      const response = await fetchData(url);
      return response;
    } catch (err) {
      return err;
    }
  }
);
