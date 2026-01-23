import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todolist/todoSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

export const RootState = ReturnType(store.getState);
export const AppDispatch = store.dispatch;