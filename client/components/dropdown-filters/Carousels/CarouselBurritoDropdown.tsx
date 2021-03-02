import React from "react";

const CarouselBurritoDropdown = (props): JSX.Element => {
  let allChoices = (
    <option key='0' value='All'>
      All
    </option>
  );

  return (
    <div className='carousel-dropdown-menu'>
      <form>
        <label>
          Filter by type of burrito:
          <select
            className='dropdown-select'
            value={props.burritoTypeDropdownItem}
            onChange={props.handleBurritoTypeDropdownChange}
          >
            {allChoices}
            {props.reviews.map((review) => (
              // console.log(review)
              <option key={review._id} value={review.burrito_type}>
                {review.burrito_type}
              </option>
            ))}
          </select>
        </label>
        {/* <input id="dropwdown-submit-button" type="submit" value="Submit" /> */}
      </form>
    </div>
  );
};

export default CarouselBurritoDropdown;
