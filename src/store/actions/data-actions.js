import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/api';

const createFetchDataThunk = name => {
  return createAsyncThunk(`${name}/fetchData`, async url => {
    try {
      // console.log(url);
      const response = await fetchData(url);
      // if (url === 'movie/topRated') console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
};

export default createFetchDataThunk;
