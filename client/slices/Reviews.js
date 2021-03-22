import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
const fetchReviews = createAsyncThunk("/api", async (thunkAPI) => {
  let response = await fetch("/api");
  let parsedReviews = response.json();
  return parsedReviews;
});

// Then, handle actions in your reducers:
const reviewsSlice = createSlice({
  name: "reviews",
  initialState: { reviews: [], loading: "idle" },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    addReview(state, action) {
      state.reviews.push(action.payload);
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchReviews.fulfilled]: (state, action) => {
      // Add user to the state array
      state.reviews.push(action.payload);
    },
  },
});

// Later, dispatch the thunk as needed in the app

export const { addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
