import React, { useState } from "react";

const PopUpReviewForm = ({
  handleReviewPopUpClick,
  newReview,
  handleBurritoTypeChange,
  handleRestaurantNameChange,
  handleFormSubmit,
  handleNeighborhoodChange,
  handleBoroughChange,
  handlePriceChange,
  handleRatingChange,
}): JSX.Element => {
  return (
    <div>
      <div>
        <div className='popup-review-form'>
          <span
            className='popup-review-form-x'
            onClick={handleReviewPopUpClick}
          >
            &times;{" "}
          </span>
          <form onSubmit={handleFormSubmit}>
            <div className='burrito-form'>
              <label className='burrito-form-label'>
                Burrito Type:
                <input
                  id='form-field'
                  type='text'
                  // value={}
                  placeholder='Super Carne Asada'
                  onChange={(e) => handleBurritoTypeChange(e)}
                />
              </label>
              <label className='burrito-form-label'>
                Restaurant:
                <input
                  id='form-field'
                  type='text'
                  // value={newReview.}
                  placeholder='The Cantina'
                  onChange={handleRestaurantNameChange}
                />
              </label>
              <label className='burrito-form-label'>
                Neighborhood:
                <input
                  id='form-field'
                  type='text'
                  // value={newReview.neighborhood}
                  placeholder='Mos Eisley'
                  onChange={handleNeighborhoodChange}
                />
              </label>
              <label className='burrito-form-label'>
                Borough:
                <input
                  id='form-field'
                  type='text'
                  // value={newReview.borough}
                  placeholder='Mos Eisley'
                  onChange={handleBoroughChange}
                />
              </label>
              <label className='burrito-form-label'>
                Price:
                <input
                  id='form-field'
                  type='text'
                  // value={newReview.price}
                  placeholder='100 million dollars'
                  onChange={handlePriceChange}
                />
              </label>
              <label className='burrito-form-label'>
                Rating (Out of 10):
                <input
                  id='form-field'
                  type='text'
                  // value={newReview.rating}
                  placeholder='up to 11'
                  onChange={handleRatingChange}
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
