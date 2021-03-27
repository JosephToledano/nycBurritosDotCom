import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../reduxHooks";
import type { RootState } from "../store";

let reviews = useAppSelector((state) => state.reviews.reviews);

const initialState: any = {
  reviewsForBurritoType: [],
  reviewsForNeighborhood: [],
  burritoTypeDropdownItem: {},
  neighborhoodTypeDropdownItem: {},
};

const dropdownsSlice = createSlice({
  name: "dropdowns",
  initialState,
  reducers: {
    handleBurritoTypeDropdownChange(state, action: PayloadAction<any>) {
      state.burritoTypeDropdownItem = action.payload;
    },
    handleNeighborhoodTypeDropdownChange(state, action: PayloadAction<any>) {
      state.neighborhoodTypeDropdownItem = action.payload;
    },
  },
});

const [reviewsForNeighborhood, setReviewsForNeighbohood] = React.useState<
  newReview[]
>([]);
const [
  reviewsForBurritoType,
  setReviewsForBurritoType,
] = React.useState<reviewsForBurritoType>();

const [
  burritoTypeDropdownItem,
  setBurritoTypeDropdownItem,
] = React.useState<string>(null);
const [
  neighborhoodTypeDropdownItem,
  setNeighborhoodTypeDropdownItem,
] = React.useState<string>(null);

const handleNeighborhoodClick = (event): void => {
  let neighborhoodReviews = reviews;
  neighborhoodReviews = neighborhoodReviews.filter(
    (review) => review.neighborhood == event.target.id
  );
  setReviewsForNeighbohood(reviewsForNeighborhood.concat(neighborhoodReviews));
};

//handlers for dropdown filters
const handleBurritoTypeDropdownChange = (event): void => {
  setBurritoTypeDropdownItem(event.target.value);
};

const handleNeighborhoodTypeDropdownChange = (event): void => {
  setNeighborhoodTypeDropdownItem(event.target.value);
};
