import React, { useState, useEffect } from "react";
import {
  handleBurritoTypeChange,
  handleBoroughChange,
  handleNeigborhoodChange,
  handlePriceChange,
  handleRatingChange,
  handleRestaurantChange,
  setUserId,
} from "../slices/ReviewsSlice";

import { useAppDispatch, useAppSelector } from "../reduxHooks";
import { useSelector, useDispatch } from "react-redux";

const PopUpReviewForm = ({
  handleReviewPopUpClick,
  newReview,
  // handleBurritoTypeChange,
  // handleRestaurantNameChange,
  handleFormSubmit,
  // handleNeighborhoodChange,
  // handleBoroughChange,
  // handlePriceChange,
  // handleRatingChange,
}): JSX.Element => {
  const dispatch = useDispatch();
  let currentUserId = useAppSelector((state) => state.users.user_id);
  useEffect(() => {
    dispatch(setUserId(currentUserId));
  }, []);
  newReview = useAppSelector((state) => state.reviews.newReview);

  const handleBurrito = (event): void => {
    // let updatedReviewList = newReview;
    // updatedReviewList["burrito_type"] = event.target.value;
    // setNewReview(updatedReviewList);
    dispatch(handleBurritoTypeChange(event.target.value));
  };

  const handleRestaurantName = (event): void => {
    // let updatedReviewList = newReview;
    // updatedReviewList.restaurant_name = event.target.value;
    // setNewReview(updatedReviewList);
    dispatch(handleRestaurantChange(event.target.value));
  };

  const handleNeighborhood = (event): void => {
    // let updatedReviewList = newReview;
    // updatedReviewList.neighborhood = event.target.value;
    // setNewReview(updatedReviewList);
    dispatch(handleNeigborhoodChange(event.target.value));
  };

  const handleBorough = (event): void => {
    // let updatedReviewList = newReview;
    // updatedReviewList.borough = event.target.value;
    // setNewReview(updatedReviewList);
    dispatch(handleBoroughChange(event.target.value));
  };

  const handlePrice = (event): void => {
    // let updatedReviewList = newReview;
    // updatedReviewList.price = event.target.value;
    // setNewReview(updatedReviewList);
    dispatch(handlePriceChange(event.target.value));
  };

  const handleRatings = (event): void => {
    // let updatedReviewList = newReview;
    // updatedReviewList.rating = event.target.value;
    // setNewReview(updatedReviewList);
    dispatch(handleRatingChange(event.target.value));
  };

  return (
    <div id='popup-review-form-container'>
      <div>
        <div className='popup-review-form'>
          <span
            className='popup-review-form-x'
            onClick={handleReviewPopUpClick}
          >
            &times;{" "}
          </span>
          <form onSubmit={(e) => handleFormSubmit(e, newReview)}>
            <div className='burrito-form'>
              <label className='burrito-form-label'>
                Burrito Type:
                <input
                  id='form-field'
                  type='text'
                  // value={}
                  placeholder='Super Carne Asada'
                  onChange={(e) => handleBurrito(e)}
                />
              </label>
              <label className='burrito-form-label'>
                Restaurant:
                <input
                  id='form-field'
                  type='text'
                  value={newReview.restaurant}
                  placeholder='The Cantina'
                  onChange={handleRestaurantName}
                />
              </label>
              <label className='burrito-form-label'>
                Neighborhood:
                <input
                  id='form-field'
                  type='text'
                  value={newReview.neighborhood}
                  placeholder='Mos Eisley'
                  onChange={handleNeighborhood}
                />
              </label>
              <label className='burrito-form-label'>
                Borough:
                <input
                  id='form-field'
                  type='text'
                  value={newReview.borough}
                  placeholder='Mos Eisley'
                  onChange={handleBorough}
                />
              </label>
              <label className='burrito-form-label'>
                Price:
                <input
                  id='form-field'
                  type='text'
                  value={newReview.price}
                  placeholder='100 million dollars'
                  onChange={handlePrice}
                />
              </label>
              <label className='burrito-form-label'>
                Rating (Out of 10):
                <input
                  id='form-field'
                  type='text'
                  value={newReview.rating}
                  placeholder='up to 11'
                  onChange={handleRatings}
                />
              </label>
            </div>
            <div className='form-submit-button'>
              <input id='form-submit-button' type='submit' value=' Send It ' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpReviewForm;
