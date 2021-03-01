import React from "react";
import BoroughFeed from "./BoroughFeed";

const FeedContainer = ({
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
  console.log("these are the reviews", reviews);
  return (
    <>
      <h2 className='FeedContainerText'>Rankings by Borough</h2>
      <BoroughFeed
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
        handleBurritoTypeDropdownChange={handleBurritoTypeDropdownChange}
        handleNeighborhoodTypeDropdownChange={
          handleNeighborhoodTypeDropdownChange
        }
      />
    </>
  );
};

export default FeedContainer;
