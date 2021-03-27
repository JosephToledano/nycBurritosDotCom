import { combineReducers } from "@reduxjs/toolkit";
// import NewRevewReducer from "./slices/NewReview";
import ReviewsReducer from "./slices/ReviewsSlice";
import UsersReducer from "./slices/UsersSlice";

const rootReducer = combineReducers({
  // newReview: NewRevewReducer,
  reviews: ReviewsReducer,
  users: UsersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
