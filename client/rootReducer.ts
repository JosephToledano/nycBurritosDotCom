import { combineReducers } from "@reduxjs/toolkit";
// import NewRevewReducer from "./slices/NewReview";
import DropdownsReducer from "./slices/DropdownsSlice";
import ReviewsReducer from "./slices/ReviewsSlice";
import UsersReducer from "./slices/UsersSlice";

const rootReducer = combineReducers({
  // newReview: NewRevewReducer,
  reviews: ReviewsReducer,
  users: UsersReducer,
  dropdowns: DropdownsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
