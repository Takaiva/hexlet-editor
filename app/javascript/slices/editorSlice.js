/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const slice = createSlice({
  name: 'editor',
  initialState: {
    error: false,
    isFetching: false,
    code: '// Write your code in JS\n',
  },
  reducers: {
    updateCode(state, { payload }) {
      state.code = payload;
    },
  },
});

const getData = async () => {
  const data = await axios.post('/snippets', { code: '' });
  return data.data.id;
};
export const dataId = getData();

export const { actions } = slice;

export default slice.reducer;
