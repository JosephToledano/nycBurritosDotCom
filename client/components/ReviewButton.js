import React from 'react'
import PopUpReviewForm from "./PopUpReviewForm"; 

const ReviewButton = (props) => {
  
  const clickedReview = props.reviewSeen;
  let form;
  if (clickedReview) {
    form = <PopUpReviewForm 
        handleBurritoTypeChange = {props.handleBurritoTypeChange} 
        handleRatingChange = {props.handleRatingChange}
        handleRestaurantNameChange = {props.handleRestaurantNameChange}
        handlePriceChange = {props.handlePriceChange}
        handleNeighborhoodChange = {props.handleNeighborhoodChange}
        handleFormSubmit = {props.handleFormSubmit}
        handlePopUpClick = {props.handlePopUpClick}
        newReview = {props.newReview}
    />;
  } else {
    form = null
  }
  return (
   <div>
    <div className="review-button-section">
      <button id = 'review-button'  onClick= {props.handleReviewPopUpClick}>Submit a Review</button>
    </div>
    {form}
   </div>
  );
 }

 export default ReviewButton;