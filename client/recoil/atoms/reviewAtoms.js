import { atom } from "recoil";

export const newReview = atom({
  key: "newReview",
  default: {
    id: 0,
    burrito_type: "",
    restaurant_name: "",
    restaurant_image_url: "",
    neighborhood: "",
    borough: "",
    price: 0,
    rating: 0,
  },
});

export const reviews = atom({
  key: "reviews",
  default: [],
});
