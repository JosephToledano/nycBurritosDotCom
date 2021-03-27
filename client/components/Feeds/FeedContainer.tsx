import React from "react";
import BoroughFeed from "./BoroughFeed";

const FeedContainer = ({
  reviews,
  burritoTypeDropdownItem,
  reviewsForNeighborhood,
  neighborhoodTypeDropdownItem,
  handleBurritoTypeDropdownChange,
  handleNeighborhoodTypeDropdownChange,
  handleNeighborhoodClick,
  newReview,
  handleFormSubmit,
}): JSX.Element => {
  return (
    <>
      <h2 className='FeedContainerText'>Rankings by Borough</h2>
      <BoroughFeed
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
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
