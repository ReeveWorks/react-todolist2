import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {}
});

export default todoSlice.reducer;