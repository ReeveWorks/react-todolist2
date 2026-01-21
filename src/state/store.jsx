import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

export const RootState = ReturnType(store.getState);
export const AppDispatch = store.dispatch;