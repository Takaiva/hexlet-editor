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
const isAuthenticated = async () => {
  const response = await axios.get('api/users/profile');
  return response.user;
};

const getData = async () => {
  if (!isAuthenticated()) {
    return null;
  }
  const data = await axios.post('api/snippets', { code: '' });
  return data.data.id;
};

export const dataId = getData();

export const { actions } = slice;

export default slice.reducer;
