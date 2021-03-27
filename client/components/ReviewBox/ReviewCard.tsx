import React from "react";
import UpdatePopUpForm from "../UpdatePopUpForm";
import { Link } from "react-router-dom";

const ReviewCard = ({
  rating,
  restaurant_image_url,
  restaurant_name,
  price,
  neighborhood,
  borough,
  reviewsForNeighborhood,
  burrito_type,
  handleNeighborhoodClick,
  handleFormSubmit,
  newReview,
  id,
}): JSX.Element => {
  return (
    <div className='burrito-card'>
      <div className='burrito-card-ratingAndReviews'>
        <p className='burrito-card-text'>Rating: {rating}</p>
        <p className='burrito-card-text'>Reviews: </p>
      </div>
      <div className='burrito-card-image-container'>
        <img className='burrito-card-pic' src={restaurant_image_url} />
        <div className='burrito_type-card-image-text'>
          <p className='burrito-card-restaurant-text'> {restaurant_name}</p>
        </div>
      </div>
      <p className='burrito-card-type-text'>Burrito Type: {burrito_type}</p>
      <p className='burrito-card-text'>Neighborhood: {neighborhood}</p>
      <p className='burrito-card-text'>Borough: {borough}</p>

      <button className='burrito-card-button'>Contact</button>
    </div>
  );
};

export default ReviewCard;
