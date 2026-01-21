import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} CounterState
 * @property {number} value
 */

/** @type {CounterState} */
const initialState = {
  value: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {}
});

export default todoSlice.reducer;