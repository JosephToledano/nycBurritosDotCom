import React from "react";
import Carousel from "./Carousel";

const Top10CardList = ({
  reviews,
  handleDelete,
  burritoTypeDropdownItem,
  reviewsForNeighborhood,
  neighborhoodTypeDropdownItem,
  handleBurritoTypeDropdownChange,
  handleNeighborhoodTypeDropdownChange,
  handleNeighborhoodClick,
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
}) => {
  const getTopReviews = (reviews) => {
    let sortedReviews = reviews.sort((a, b) => {
      Number(a.rating) > Number(b.rating) ? 1 : -1;
    });
    let top10Reviews = [];
    for (let i = 0; i < sortedReviews.length; i++) {
      if (i < 10) top10Reviews.push(sortedReviews[i]);
    }
    return top10Reviews;
  };
  const topReviews = getTopReviews(reviews);

  return (
    <div className='top10BurritosSection'>
      <p className='top10BurritosText'>Top 10 Burritos in NYC</p>
      <Carousel
        handleDelete={handleDelete}
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleRatingChange={handleRatingChange}
        handlePopUpClick={handlePopUpClick}
        handleFormSubmit={handleFormSubmit}
        handleBurritoTypeChange={handleBurritoTypeChange}
        handleRestaurantNameChange={handleRestaurantNameChange}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handlePriceChange={handlePriceChange}
        reviews={reviews}
      />
    </div>
  );
};

export default Top10CardList;
