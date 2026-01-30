import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todolist/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

/**
 * Returns the current Redux state at runtime.
 * Use `getRootState()` to access the latest state from the store.
 */
export const getRootState = () => store.getState();
export const AppDispatch = store.dispatch;