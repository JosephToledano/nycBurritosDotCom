import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface newReviewState {
  id: number;
  burrito_type: string;
  restaurant_name: string;
  restaurant_image_url: string;
  neighborhood: string;
  borough: string;
  price: number;
  rating: number;
}

const initialState = {
  id: -1,
  burrito_type: "",
  restaurant_name: "",
  restaurant_image_url: "",
  neighborhood: "",
  borough: "",
  price: 0,
  rating: 0,
} as newReviewState;

const newReviewSlice = createSlice({
  name: "newReview",
  initialState,
  reducers: {
    updateID(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    updateBurritoType(state, action: PayloadAction<string>) {
      state.burrito_type = action.payload;
    },
    updateRestaurantName(state, action: PayloadAction<string>) {
      state.restaurant_name = action.payload;
    },
    updateRestaurantImage(state, action: PayloadAction<string>) {
      state.restaurant_image_url = action.payload;
    },
    updateNeighborhood(state, action: PayloadAction<string>) {
      state.neighborhood = action.payload;
    },
    updateBorough(state, action: PayloadAction<string>) {
      state.borough = action.payload;
    },
    updatePrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    updateRating(state, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
    clearReview(state) {
      state = {
        id: -1,
        burrito_type: "",
        restaurant_name: "",
        restaurant_image_url: "",
        neighborhood: "",
        borough: "",
        price: 0,
        rating: 0,
      };
    },
  },
});

export const {
  updateID,
  updateBurritoType,
  updateRestaurantName,
  updateRestaurantImage,
  updateNeighborhood,
  updateBorough,
  updatePrice,
  updateRating,
  clearReview,
} = newReviewSlice.actions;
export default newReviewSlice.reducer;
