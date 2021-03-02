import React from "react";
import ReviewCardBox from "../ReviewBox/ReviewCardBox";

const ReviewCardList = ({
  reviews,
  neighborhoodTypeDropdownItem,
  burritoTypeDropdownItem,
  handleDelete,
  handleNeighborhoodClick,
  reviewsForNeighborhood,
  handleUpdatePopUpClick,
  updateSeen,
  newReview,
  handleRatingChange,
  handlePopUpClick,
  handleFormSubmit,
  handleBurritoTypeChange,
  handleRestaurantNameChange,
  handleNeighborhoodChange,
  handlePriceChange,
}): JSX.Element => {
  if (reviews.length) {
    return (
      <div className='rankings-box-feed'>
        {reviews.map((review) => {
          console.log(review.neighborhood);
          console.log(neighborhoodTypeDropdownItem);

          if (
            review.neighborhood === neighborhoodTypeDropdownItem &&
            review.burrito_type === burritoTypeDropdownItem
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                borough={review.borough}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
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
            );
          } else if (
            (neighborhoodTypeDropdownItem === "All" ||
              neighborhoodTypeDropdownItem === null) &&
            burritoTypeDropdownItem === review.burrito_type
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                borough={review.borough}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
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
            );
          } else if (
            (burritoTypeDropdownItem === "All" ||
              burritoTypeDropdownItem === null) &&
            neighborhoodTypeDropdownItem === review.neighborhood
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                borough={review.borough}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
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
            );
          } else if (
            (neighborhoodTypeDropdownItem === "All" ||
              neighborhoodTypeDropdownItem === null) &&
            (burritoTypeDropdownItem === "All" ||
              burritoTypeDropdownItem === null)
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                borough={review.borough}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
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
            );
          }
        })}
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

{
  /* <div className='rankings-box-feed'>
            {reviews.map(review => {
                
                    
                return <ReviewCardBox  
                    // dropdownItem = {dropdownItem}
                    id = {review.id}
                    neighborhood = {review.neighborhood} 
                    rating = {review.rating} 
                    price = {review.price}
                    burrito_type = {review.burrito_type}
                    restaurant_name = {review.restaurant_name}
                    updateSeen = {updateSeen}
                    handleUpdatePopUpClick = {props.handleUpdatePopUpClick}
                    handleDelete = {props.handleDelete}
                    handleNeighborhoodClick = {props.handleNeighborhoodClick}
                    reviewsForNeighborhood = {props.reviewsForNeighborhood}
                    />    
            }  
        )
            }
        </div> */
}

export default ReviewCardList;
