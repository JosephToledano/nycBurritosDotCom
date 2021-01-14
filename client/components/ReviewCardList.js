import React from 'react'
import ReviewCardBox from './ReviewCardBox'

 const ReviewCardList = (props) => {

    return (
        <div className='rankings-box-feed'>
            {props.reviews.map(review => {
                    
                return <ReviewCardBox  
                    // dropdownItem = {props.dropdownItem}
                    key = {review.id}
                    neighborhood = {review.neighborhood} 
                    rating = {review.rating} 
                    price = {review.price}
                    burrito_type = {review.burrito_type}
                    restaurant_name = {review.restaurant_name}
                    updateSeen = {props.updateSeen}
                    handleUpdatePopUpClick = {props.handleUpdatePopUpClick}
                    />    
            }  
        )
            }
        </div>
    )
}

export default ReviewCardList