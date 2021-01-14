import React from 'react'
import UpdatePopUpForm from './UpdatePopUpForm'
import '../index.css';
import { Link } from 'react-router-dom';


const ReviewCard = (props) => {
    const clickedUpdate = props.updateSeen;
    let form;
    if (clickedUpdate) {
      form = <UpdatePopUpForm 
          handleBurritoTypeChange = {props.handleBurritoTypeChange} 
          handleRatingChange = {props.handleRatingChange}
          handleRestaurantNameChange = {props.handleRestaurantNameChange}
          handlePriceChange = {props.handlePriceChange}
          handleNeighborhoodChange = {props.handleNeighborhoodChange}
          handleFormSubmit = {props.handleFormSubmit}
          handlePopUpClick = {props.handlePopUpClick}
          newReview = {props.newReview}
      />;
    } else {
      form = null
    }

    return(
    <div>
        <div className= "profile-contents">
          <div className ="burrito-profile-section-container">
            <div className="burrito-profile-section">
              <div className = "burrito-profile-label">
                <h3>Burrito type</h3>
              </div>
              <div className = 'burrito-profile'>
                <p className="burrito-profile-text"> {props.burrito_type}</p>
              </div>
            </div>

            <div className="burrito-profile-section">
              <div className = "burrito-profile-label">
                <h3>Restaurant</h3>
              </div>
              <div className = 'burrito-profile'>
               <p className="burrito-profile-text"> {props.restaurant_name}</p>
              </div>
            </div>

             <div className="burrito-profile-section">
               <div className = "burrito-profile-label">
                 <h3 >Neighborhood</h3>
               </div>

             <div className = 'burrito-profile'>
             {/* <Link to={{
                 pathname: '../Neighborhoods',
                 state: {review: 'props.reviewsForNeighborhood'}                   
                 }} >     */}
             <p id ={props.neighborhood} className="burrito-profile-text" onClick ={props.handleNeighborhoodClick}> {props.neighborhood}</p>
             {/* </Link> */}
             </div>
          </div>
      </div>
    
              {/* <div className='burrito-profile-header'>
                <h4 className= 'number-of-reviews-header'># of Reviews</h4>
                <h6 className ='number-of-reviews-text'>5</h6>
              </div> */}

            <div className = 'burrito-profile-header'>
                <h4 className= 'average-score-header'>Rating</h4>
                <h6 className ='average-score-text'>{props.rating}</h6>
            </div>

            <div className = 'burrito-profile-header'>
              <h4 className= 'price-header'>Price</h4>
                <h6 className ='price-header-text'>{props.price}</h6>
            </div>
              <div className="delete-review">
                <p id = {props.id} className ="deleteReview" onClick = {props.handleDelete}>X</p>
              </div>
              {/* <div className="update-review">
                <button onClick = {props.handleUpdatePopUpClick} className ="updateReview"> Update </button>
              </div> */}
        </div>
        {form}
    </div>
    )
}

export default ReviewCard
