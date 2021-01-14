import React from 'react'
import ReviewCard from './ReviewCard'


 const ReviewCardBox = (props) => {
   
        return(
            <div className= 'burrito-rankings-box'>
                <ReviewCard key = {props.key}
                               neighborhood = {props.neighborhood} 
                               rating = {props.rating} 
                               price = {props.price}
                               burrito_type = {props.burrito_type}
                               restaurant_name = {props.restaurant_name} 
                               updateSeen = {props.updateSeen}
                               handleUpdatePopUpClick = {props.handleUpdatePopUpClick}
                               />
            </div>
        )
    }

export default ReviewCardBox;