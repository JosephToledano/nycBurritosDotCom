import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState(false);
  return (
    <div className='burrito-card'>
      <div className='burrito-card-details-top'>
        <div className='burrito-card-ratingAndReviews'>
          <p className='burrito-card-text'>🌯🌯🌯🌯</p>
        </div>
        <div className='burrito-card-ratingAndReviews'>
          <p className='burrito-card-text'>10 Reviews </p>
        </div>
      </div>
      {/* <div className='burrito-card-image-container'> */}
      <div className='burrito-card-image-container'>
        <div className='price-bubble'>
          <p className='price-text'> ${price}</p>
        </div>
        <img
          className='burrito-card-pic'
          src='https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
        />
      </div>
      {/* </div> */}
      <div>
        <div className='burrito-card-details'>
          <p className='burrito-card-restaurant-text'> {restaurant_name}</p>
          <p className='burrito-card-type-text'>{burrito_type}</p>
          <p
            onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
          >
            More Details &or;{" "}
          </p>
        </div>
      </div>
      {expanded ? (
        <>
          <div className='burrito-card-details-box'>
            <div className='burrito-card-neighborhood-and-borough'>
              <p className='burrito-card-text'>Neighborhood: {neighborhood}</p>
              <p className='burrito-card-text'>Borough: {borough}</p>
            </div>
          </div>
          <div className='burrito-card-borough-box'></div>
        </>
      ) : null}
    </div>
  );
};

export default ReviewCard;
