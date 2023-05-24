import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/api';

const createFetchDataThunk = (name) => {
  return createAsyncThunk(`${name}/fetchData`, async (url) => {
    console.log(url);
    try {
      const response = await fetchData(url);
      return response;
    } catch (err) {
      return err;
    }
  });
};

export default createFetchDataThunk;