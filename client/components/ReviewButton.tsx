import React from "react";
import PopUpReviewForm from "./PopUpReviewForm";

const ReviewButton = ({
  newReview,
  handleReviewPopUpClick,
  handleFormSubmit,
  handleNeighborhoodChange,
  handlePriceChange,
  handleRestaurantNameChange,
  handleRatingChange,
  handleBurritoTypeChange,
  reviewSeen,
  handleBoroughChange,
}): JSX.Element => {
  const clickedReview = reviewSeen;
  let form;
  if (clickedReview) {
    form = (
      <PopUpReviewForm
        handleBurritoTypeChange={handleBurritoTypeChange}
        handleRatingChange={handleRatingChange}
        handleRestaurantNameChange={handleRestaurantNameChange}
        handlePriceChange={handlePriceChange}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handleFormSubmit={handleFormSubmit}
        handleBoroughChange={handleBoroughChange}
        handleReviewPopUpClick={handleReviewPopUpClick}
        newReview={newReview}
      />
    );
  } else {
    form = null;
  }
  return (
    <div>
      <div className='review-button-section'>
        <button id='review-button' onClick={handleReviewPopUpClick}>
          Submit a Review
        </button>
      </div>
      {form}
    </div>
  );
};

export default ReviewButton;
