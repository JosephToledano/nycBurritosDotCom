import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface newReviewState {
  currentUserId: number;
  id: number;
  burrito_type: string;
  restaurant_name: string;
  restaurant_image_url: string;
  neighborhood: string;
  borough: string;
  price: number;
  rating: number;
}

// interface reviewsState {
//   reviews: newReviewState[];
// }

// First, create the thunk
const fetchReviews = createAsyncThunk("/api", async () => {
  return fetch("/api").then((res) => res.json());
});

const submitNewReview = createAsyncThunk(
  "/api/addReview",
  async (newReview: any) => {
    return fetch("api/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        user_id: newReview.currentUserId,
        id: newReview.id,
        burrito_type: newReview.burrito_type,
        restaurant_name: newReview.restaurant_name,
        borough: newReview.borough,
        neighborhood: newReview.neighborhood,
        price: newReview.price,
        rating: newReview.rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const initialState: any = {
  reviews: [],
  newReview: {
    id: 0,
    burrito_type: "",
    restaurant_name: "",
    restaurant_image_url: "",
    neighborhood: "",
    borough: "",
    price: 0,
    rating: 0,
    currentUserId: -1,
  },
};

// Then, handle actions in your reducers:
const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<any>) {
      state.newReview.currentUserId = action.payload;
    },
    handleBurritoTypeChange(state, action: PayloadAction<any>) {
      state.newReview.burrito_type = action.payload;
    },
    handleRestaurantChange(state, action: PayloadAction<any>) {
      state.newReview.restaurant_name = action.payload;
    },
    handleNeigborhoodChange(state, action: PayloadAction<any>) {
      state.newReview.neighborhood = action.payload;
    },
    handleBoroughChange(state, action: PayloadAction<any>) {
      state.newReview.borough = action.payload;
    },
    handlePriceChange(state, action: PayloadAction<any>) {
      state.newReview.price = action.payload;
    },
    handleRatingChange(state, action: PayloadAction<any>) {
      state.newReview.rating = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<any>) => {
        // Add user to the state array
        action.payload.forEach((review) => {
          if (state.reviews.includes(review) === false)
            state.reviews.push(review);
        });
      })
      .addCase(
        submitNewReview.fulfilled,
        (state, action: PayloadAction<any>) => {
          // Add user to the state array
          state.reviews.push(action.payload);
          state.newReview = {
            id: 0,
            restaurant_name: "",
            restaurant_image_url: "",
            burrito_type: "",
            price: 0,
            neighborhood: "",
            borough: "",
            rating: 0,
          };
        }
      );
  },
});

// Later, dispatch the thunk as needed in the app

export const {
  handleBurritoTypeChange,
  handleBoroughChange,
  handleNeigborhoodChange,
  handlePriceChange,
  handleRatingChange,
  handleRestaurantChange,
  setUserId,
} = reviewsSlice.actions;
export { fetchReviews, submitNewReview };
export const selectReviews = (state: RootState) => state.reviews.reviews;
export default reviewsSlice.reducer;
