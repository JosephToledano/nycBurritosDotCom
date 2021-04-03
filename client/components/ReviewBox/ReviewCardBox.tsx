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
  handleNeighborhoodClick,
  handleFormSubmit,
  newReview,
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
        handleNeighborhoodClick={handleNeighborhoodClick}
        reviewsForNeighborhood={reviewsForNeighborhood}
        handleFormSubmit={handleFormSubmit}
        newReview={newReview}
      />
    </div>
  );
};

export default ReviewCardBox;
