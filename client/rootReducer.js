import { combineReducers } from "@reduxjs/toolkit";
import NewRevewReducer from "./slices/NewReview";
import ReviewsReducer from "./slices/Reviews";
import UsersReducer from "./slices/Users";
export default combineReducers({
  newReview: NewRevewReducer,
  reviews: ReviewsReducer,
  users: UsersReducer,
});
