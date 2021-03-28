import React from "react";
import BoroughFeed from "./BoroughFeed";

const FeedContainer = ({
  reviews,
  reviewsForNeighborhood,
  handleNeighborhoodClick,
  newReview,
  handleFormSubmit,
}): JSX.Element => {
  return (
    <>
      <h2 className='FeedContainerText'>Rankings by Borough</h2>
      <BoroughFeed
        reviewsForNeighborhood={reviewsForNeighborhood}
        handleNeighborhoodClick={handleNeighborhoodClick}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
        reviews={reviews}
      />
    </>
  );
};

export default FeedContainer;
