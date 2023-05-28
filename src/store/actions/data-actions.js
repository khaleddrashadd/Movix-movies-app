import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/api';

const createFetchDataThunk = (name,params) => {
  return createAsyncThunk(`${name}/fetchData`, async (url) => {
    try {
      const response = await fetchData(url, params);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
};

export default createFetchDataThunk;
