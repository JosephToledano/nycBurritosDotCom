import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { reviewsState } from "./slices/ReviewsSlice";
import rootReducer from "./rootReducer";
// ...

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
