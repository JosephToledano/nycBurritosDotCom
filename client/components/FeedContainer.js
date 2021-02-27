import React from "react";
import BoroughFeed from "./BoroughFeed";

const FeedContainer = (props) => {
  console.log("these are the reviews", props.reviews);
  return (
    <>
      <h2 className='FeedContainerText'>Rankings by Borough</h2>
      <BoroughFeed
        handleDelete={props.handleDelete}
        burritoTypeDropdownItem={props.burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={props.neighborhoodTypeDropdownItem}
        reviewsForNeighborhood={props.reviewsForNeighborhood}
        handleNeighborhoodClick={props.handleNeighborhoodClick}
        handleUpdatePopUpClick={props.handleUpdatePopUpClick}
        updateSeen={props.updateSeen}
        handleBurritoTypeDropdownChange={props.handleBurritoTypeDropdownChange}
        handleNeighborhoodTypeDropdownChange={
          props.handleNeighborhoodTypeDropdownChange
        }
        reviews={props.reviews}
        newReview={props.newReview}
      />
    </>
  );
};

export default FeedContainer;
