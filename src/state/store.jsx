import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todolist/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export const getRootState = () => store.getState();
export const AppDispatch = store.dispatch;