import React from 'react'
import ReviewCard from './ReviewCard'


 const ReviewCardBox = (props) => {
   
        return(
            <div className= 'burrito-rankings-box'>
                <ReviewCard id = {props.id}
                               neighborhood = {props.neighborhood} 
                               rating = {props.rating} 
                               price = {props.price}
                               burrito_type = {props.burrito_type}
                               restaurant_name = {props.restaurant_name} 
                               updateSeen = {props.updateSeen}
                               handleUpdatePopUpClick = {props.handleUpdatePopUpClick}
                               handleDelete = {props.handleDelete}
                               handleNeighborhoodClick = {props.handleNeighborhoodClick}
                               reviewsForNeighborhood = {props.reviewsForNeighborhood}

                               />
            </div>
        )
    }

export default ReviewCardBox;