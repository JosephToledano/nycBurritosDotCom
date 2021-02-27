import React from "react";
import ReviewCardBox from "./ReviewCardBox";

const ReviewCardList = (props) => {
  console.log("these are the props from reviewCardList", props);
  if (props.reviews.length) {
    return (
      <div className='rankings-box-feed'>
        {props.reviews.map((review) => {
          console.log(review.neighborhood);
          console.log(props.neighborhoodTypeDropdownItem);

          if (
            review.neighborhood === props.neighborhoodTypeDropdownItem &&
            review.burrito_type === props.burritoTypeDropdownItem
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {props.dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                borough={review.borough}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
                updateSeen={props.updateSeen}
                handleUpdatePopUpClick={props.handleUpdatePopUpClick}
                handleDelete={props.handleDelete}
                handleNeighborhoodClick={props.handleNeighborhoodClick}
                reviewsForNeighborhood={props.reviewsForNeighborhood}
              />
            );
          } else if (
            (props.neighborhoodTypeDropdownItem === "All" ||
              props.neighborhoodTypeDropdownItem === null) &&
            props.burritoTypeDropdownItem === review.burrito_type
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {props.dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
                borough={review.borough}
                updateSeen={props.updateSeen}
                handleUpdatePopUpClick={props.handleUpdatePopUpClick}
                handleDelete={props.handleDelete}
                handleNeighborhoodClick={props.handleNeighborhoodClick}
                reviewsForNeighborhood={props.reviewsForNeighborhood}
              />
            );
          } else if (
            (props.burritoTypeDropdownItem === "All" ||
              props.burritoTypeDropdownItem === null) &&
            props.neighborhoodTypeDropdownItem === review.neighborhood
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {props.dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                borough={review.borough}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
                updateSeen={props.updateSeen}
                handleUpdatePopUpClick={props.handleUpdatePopUpClick}
                handleDelete={props.handleDelete}
                handleNeighborhoodClick={props.handleNeighborhoodClick}
                reviewsForNeighborhood={props.reviewsForNeighborhood}
              />
            );
          } else if (
            (props.neighborhoodTypeDropdownItem === "All" ||
              props.neighborhoodTypeDropdownItem === null) &&
            (props.burritoTypeDropdownItem === "All" ||
              props.burritoTypeDropdownItem === null)
          ) {
            return (
              <ReviewCardBox
                // dropdownItem = {props.dropdownItem}
                key={review._id}
                id={review._id}
                neighborhood={review.neighborhood}
                rating={review.rating}
                price={review.price}
                burrito_type={review.burrito_type}
                borough={review.borough}
                restaurant_name={review.restaurant_name}
                restaurant_image_url={review.restaurant_image_url}
                updateSeen={props.updateSeen}
                handleUpdatePopUpClick={props.handleUpdatePopUpClick}
                handleDelete={props.handleDelete}
                handleNeighborhoodClick={props.handleNeighborhoodClick}
                reviewsForNeighborhood={props.reviewsForNeighborhood}
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
            {props.reviews.map(review => {
                
                    
                return <ReviewCardBox  
                    // dropdownItem = {props.dropdownItem}
                    id = {review.id}
                    neighborhood = {review.neighborhood} 
                    rating = {review.rating} 
                    price = {review.price}
                    burrito_type = {review.burrito_type}
                    restaurant_name = {review.restaurant_name}
                    updateSeen = {props.updateSeen}
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
