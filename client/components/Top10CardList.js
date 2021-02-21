import React from 'react'
import Carousel from './Carousel'


const Top10CardList = ({
  reviews,
  handleDelete,
  burritoTypeDropdownItem,
  reviewsForNeighborhood,
  neighborhoodTypeDropdownItem,
  handleBurritoTypeDropdownChange,
  handleNeighborhoodTypeDropdownChange,
  handleNeighborhoodClick,
  handleUpdatePopUpClick,
  updateSeen,
  newReview,
} = props) => {
  const getTopReviews = (reviews) => {
    let sortedReviews = reviews.sort((a, b) => {
      Number(a.rating) > Number(b.rating) ? 1: -1
    })
    let top10Reviews = []
    for (let i = 0; i < sortedReviews.length; i++){
      if (i < 10) top10Reviews.push(sortedReviews[i]) 
    }
  return top10Reviews;
}
const topReviews = getTopReviews(reviews)
 
return(
  <><p>Top 10 Burritos in NYC</p>
    <div>
    <Carousel
      handleDelete={handleDelete}
      burritoTypeDropdownItem={burritoTypeDropdownItem}
      neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
      reviewsForNeighborhood={reviewsForNeighborhood}
      handleNeighborhoodClick={handleNeighborhoodClick}
      handleUpdatePopUpClick={handleUpdatePopUpClick}
      updateSeen={updateSeen}
      reviews={topReviews}
      newReview={newReview} />
      </div>
      </>
)
}

export default Top10CardList