import React from 'react'

export default function NeighborhoodTypeDropdown(props){

  let allChoices = <option key = '0' value="All">All</option>
  
    return (
      <div className="dropdown-menu">
        <form >
          <label>
              Filter by neighborhood:
            <select className ="dropdown-select" value={props.neighborhoodTypeDropdownItem} onChange={props.handleNeighborhoodTypeDropdownChange}>
              {allChoices}
              {props.reviews.map((review) => (
                // console.log(review)
                  <option key = {review.id} value={review.neighborhood}>{review.neighborhood}</option>
                ))}
            </select>
          </label>
          {/* <input id="dropwdown-submit-button" type="submit" value="Submit" /> */}
        </form>
      </div>
    );
  }


