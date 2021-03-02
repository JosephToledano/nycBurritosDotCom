import { selector, useSetRecoilState } from "recoil";
import { newReview, reviews } from "../atoms/reviewAtoms";
import { useRecoilValue } from ".recoil";

export const getReviews = selector({
  key: "getReviews",
  get: async ({ get }) => {
    await fetch("/api")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log("this is the response", response);
        let currentReviews = reviews;
        response.forEach((review) => currentReviews.push(review));
        get(currentReviews);
      })
      .catch((err) => console.log(err));
  },
});

export const submitReviews = selector({
  key: "submitReviews",
  get: async ({ get }) => {
    let NewReview = useRecoilValue(newReview);
    fetch("api/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        user_id: 1,
        id: NewReview.id,
        burrito_type: NewReview.burrito_type,
        restaurant_name: NewReview.restaurant_name,
        borough: NewReview.borough,
        neighborhood: NewReview.neighborhood,
        price: NewReview.price,
        rating: NewReview.rating,
      }),
    })
      .then((res) => {
        console.log("this is the res", res);
        let newRatingToAdd = NewReview;
        let newReviewsArr = useRecoilValue(reviews);
        newReviewsArr.unshift(newRatingToAdd);
        let topReview = 0;
        newReviewsArr.sort((a, b) =>
          Number(a.rating) > Number(b.rating) ? 1 : -1
        );
        get(newReviewsArr);
        console.log("this is the res" + res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
