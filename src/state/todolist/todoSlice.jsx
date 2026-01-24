import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  todos: [
    {id: 1, task: "Learn Redux", weight: 55, status: false},
    {id: 2, task: "Master JavaScript", weight: 7, status: false},
    {id: 3, task: "Build a App", weight: 6, status: false},
    {id: 4, task: "Procrastinating 2!", weight: 1, status: true},
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addtask : (state, action) => {
      state.todos.push(action.payload);
    },
    deletetask : (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const { addtask, deletetask } = todoSlice.actions;
export default todoSlice.reducer;