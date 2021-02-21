import React from 'react'
import NeighborhoodFeed from './NeighborhoodFeed'

const FeedContainer = (props) => {

console.log(props)
return(
  <>
  <h2 className="FeedContainerText">Rankings by Borough</h2>
  <NeighborhoodFeed 
          handleDelete={props.handleDelete}
          burritoTypeDropdownItem={props.burritoTypeDropdownItem}
          neighborhoodTypeDropdownItem={props.neighborhoodTypeDropdownItem}
          reviewsForNeighborhood={props.reviewsForNeighborhood}
          handleNeighborhoodClick={props.handleNeighborhoodClick}
          handleUpdatePopUpClick={props.handleUpdatePopUpClick}
          updateSeen={props.updateSeen}
          handleBurritoTypeDropdownChange={
            props.handleBurritoTypeDropdownChange
          }
          handleNeighborhoodTypeDropdownChange={
            props.handleNeighborhoodTypeDropdownChange
          }
          reviews={props.reviews}
          newReview={props.newReview} />
          </>
)
}

export default FeedContainer;