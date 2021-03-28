import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../reduxHooks";
import type { RootState } from "../store";

// let reviews = useAppSelector((state) => state.reviews.reviews);

const initialState: any = {
  // reviewsForBurritoType: reviews,
  // reviewsForNeighborhood: reviews,
  burrito_main: "All",
  burrito_carousel: "All",
  neighborhood_main: "All",
  neighborhood_carousel: "All",
};

const dropdownsSlice = createSlice({
  name: "dropdowns",
  initialState,
  reducers: {
    handleBurritoTypeDropdownChangeMain(state, action: PayloadAction<any>) {
      state.burrito_main = action.payload;
    },
    handleBurritoTypeDropdownChangeCarousel(state, action: PayloadAction<any>) {
      state.burrito_carousel = action.payload;
    },
    handleNeighborhoodTypeDropdownChangeMain(
      state,
      action: PayloadAction<any>
    ) {
      state.neighborhood_main = action.payload;
    },
    handleNeighborhoodTypeDropdownChangeCarousel(
      state,
      action: PayloadAction<any>
    ) {
      state.neighborhood_carousel = action.payload;
    },
  },
});

export const {
  handleBurritoTypeDropdownChangeMain,
  handleBurritoTypeDropdownChangeCarousel,
  handleNeighborhoodTypeDropdownChangeMain,
  handleNeighborhoodTypeDropdownChangeCarousel,
} = dropdownsSlice.actions;
export default dropdownsSlice.reducer;
