import React, { Component } from "react";

const PopUpReviewForm = (props) => {
  const burritoIcon = 'U+1F32F'
  return (
   
   <div>
     <div >
     <div className="popup-review-form">
     <span  className="popup-review-form-x" onClick={props.handleReviewPopUpClick}>&times;    </span>
        <form onSubmit={props.handleFormSubmit}>
            <div className ='burrito-form'>
            <label className="burrito-form-label">
                Burrito Type:
                <input id = 'form-field' type="text" value= {props.newReview.burrito_type}  placeholder='Super Carne Asada' onChange={props.handleBurritoTypeChange}/>
            </label>
            <label className="burrito-form-label">
                Restaurant:
                <input id = 'form-field' type="text" value= {props.newReview.restaurant_name}  placeholder='The Cantina' onChange={props.handleRestaurantNameChange}/>
            </label>
            <label className="burrito-form-label">
                Neighborhood:
                <input  id = 'form-field' type="text" value= {props.newReview.neighborhood} placeholder='Mos Eisley' onChange= {props.handleNeighborhoodChange} />
            </label>
            <label className="burrito-form-label">
                Price:
                <input id = 'form-field' type="text" value= {props.newReview.price}  placeholder='100 million dollars' onChange={props.handlePriceChange} />
            </label>
            <label className="burrito-form-label">
                Rating (Out of 10):
                <input id = 'form-field' type="text" value= {props.newReview.rating} placeholder='up to 11' onChange={props.handleRatingChange} />
            </label>
            </div>
            <div className ="form-submit-button">
            <input id = 'form-submit-button' type="submit" value= " Send It " />
            </div>
        </form>
     </div>
    </div>
   </div>
  );
 }

 export default PopUpReviewForm;