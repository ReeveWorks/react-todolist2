import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {}
});

export default todoSlice.reducer;