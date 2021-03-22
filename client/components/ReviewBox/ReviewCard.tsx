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
  handleRestaurantNameChange,
  handleNeighborhoodChange,
  handleRatingChange,
  reviewsForNeighborhood,
  handleDelete,
  handleUpdatePopUpClick,
  burrito_type,
  handleNeighborhoodClick,
  handleBurritoTypeChange,
  updateSeen,
  handlePriceChange,
  handleFormSubmit,
  handlePopUpClick,
  newReview,
  id,
}): JSX.Element => {
  const clickedUpdate = updateSeen;
  let form;
  if (clickedUpdate) {
    form = (
      <UpdatePopUpForm
        handleBurritoTypeChange={handleBurritoTypeChange}
        handleRatingChange={handleRatingChange}
        handleRestaurantNameChange={handleRestaurantNameChange}
        handlePriceChange={handlePriceChange}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handleFormSubmit={handleFormSubmit}
        handlePopUpClick={handlePopUpClick}
        newReview={newReview}
      />
    );
  } else {
    form = null;
  }

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

    // <div className="burrito-profile-card">
    //   <div className="profile-contents">
    //     <div className="burrito-profile-section-container">
    //       <div className="burrito-profile-section">
    //         <div className="burrito-profile-label">
    //           <h3>Burrito type</h3>
    //         </div>
    //         <div className="burrito-profile">
    //           <p className="burrito-profile-text"> {burrito_type}</p>
    //         </div>
    //       </div>

    //       <div className="burrito-profile-section">
    //         <div className="burrito-profile-label">
    //           <h3>Restaurant</h3>
    //         </div>
    //         <div className="burrito-profile">
    //           <p className="burrito-profile-text"> {restaurant_name}</p>
    //         </div>
    //       </div>

    //       <div className="burrito-profile-section">
    //         <div className="burrito-profile-label">
    //           <h3>Neighborhood</h3>
    //         </div>

    //         <div className="burrito-profile">
    //           {/* <Link to={{
    //              pathname: '../Neighborhoods',
    //              state: {review: 'props.reviewsForNeighborhood'}
    //              }} >     */}
    //           <p
    //             id={props.neighborhood}
    //             className="burrito-profile-text"
    //             onClick={props.handleNeighborhoodClick}
    //           >
    //             {" "}
    //             {props.neighborhood}
    //           </p>
    //           {/* </Link> */}
    //         </div>
    //       </div>
    //       <div className="burrito-profile-section">
    //         <div className="burrito-profile-label">
    //           <h3>Borough</h3>
    //         </div>

    //         <div className="burrito-profile">
    //           {/* <Link to={{
    //              pathname: '../Neighborhoods',
    //              state: {review: 'props.reviewsForNeighborhood'}
    //              }} >     */}
    //           <p
    //             id={props.borough}
    //             className="burrito-profile-text"
    //           >
    //             {" "}
    //             {props.borough}
    //           </p>
    //           {/* </Link> */}
    //         </div>
    //       </div>
    //     </div>

    //     {/* <div className='burrito-profile-header'>
    //             <h4 className= 'number-of-reviews-header'># of Reviews</h4>
    //             <h6 className ='number-of-reviews-text'>5</h6>
    //           </div> */}

    //     <div className="burrito-profile-header">
    //       <h4 className="average-score-header">Rating</h4>
    //       <h6 className="average-score-text">{props.rating}</h6>
    //     </div>

    //     <div className="burrito-profile-header">
    //       <h4 className="price-header">Price</h4>
    //       <h6 className="price-header-text">{props.price}</h6>
    //     </div>
    //     <div className="delete-review">
    //       <p
    //         id={props.id}
    //         className="deleteReview"
    //         onClick={props.handleDelete}
    //       >
    //         X
    //       </p>
    //     </div>
    //     {/* <div className="update-review">
    //             <button onClick = {props.handleUpdatePopUpClick} className ="updateReview"> Update </button>
    //           </div> */}
    //   </div>
    //   {form}
    // </div>
  );
};

export default ReviewCard;