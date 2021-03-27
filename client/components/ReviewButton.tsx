import React from "react";
import PopUpReviewForm from "./PopUpReviewForm";

const ReviewButton = ({
  newReview,
  handleReviewPopUpClick,
  handleFormSubmit,
  reviewSeen,
}): JSX.Element => {
  const clickedReview = reviewSeen;
  let form;
  if (clickedReview) {
    form = (
      <PopUpReviewForm
        handleFormSubmit={handleFormSubmit}
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
