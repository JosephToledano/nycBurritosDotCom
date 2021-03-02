import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewCardBox = ({
  id,
  neighborhood,
  borough,
  rating,
  price,
  burrito_type,
  restaurant_name,
  restaurant_image_url,
  updateSeen,
  handleUpdatePopUpClick,
  handleDelete,
  handleNeighborhoodClick,
  handleNeighborhoodChange,
  handleRestaurantNameChange,
  handleBurritoTypeChange,
  handlePriceChange,
  handleFormSubmit,
  handlePopUpClick,
  newReview,
  handleRatingChange,
  reviewsForNeighborhood,
}): JSX.Element => {
  return (
    <div className='burrito-rankings-box'>
      <ReviewCard
        id={id}
        neighborhood={neighborhood}
        borough={borough}
        rating={rating}
        price={price}
        burrito_type={burrito_type}
        restaurant_name={restaurant_name}
        restaurant_image_url={restaurant_image_url}
        updateSeen={updateSeen}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        handleDelete={handleDelete}
        handleNeighborhoodClick={handleNeighborhoodClick}
        reviewsForNeighborhood={reviewsForNeighborhood}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handleRestaurantNameChange={handleRestaurantNameChange}
        handleBurritoTypeChange={handleBurritoTypeChange}
        handlePriceChange={handlePriceChange}
        handleFormSubmit={handleFormSubmit}
        handlePopUpClick={handlePopUpClick}
        newReview={newReview}
        handleRatingChange={handleRatingChange}
      />
    </div>
  );
};

export default ReviewCardBox;
