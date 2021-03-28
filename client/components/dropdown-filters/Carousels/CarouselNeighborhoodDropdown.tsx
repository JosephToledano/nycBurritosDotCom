import React from "react";
import { useAppSelector } from "../../../reduxHooks";
import { useDispatch } from "react-redux";
import { handleNeighborhoodTypeDropdownChangeCarousel } from "../../../slices/DropdownsSlice";

const CarouselNeighborhoodDropdown = ({ reviews }) => {
  let neighborhoodDropdownItem = useAppSelector(
    (state) => state.dropdowns.neighborhood_carousel
  );
  const dispatch = useDispatch();

  let allChoices = (
    <option key='0' value='All'>
      All
    </option>
  );

  return (
    <div className='carousel-dropdown-menu'>
      <form>
        <label>
          Filter by neighborhood:
          <select
            className='dropdown-select'
            value={neighborhoodDropdownItem}
            onChange={(e) =>
              dispatch(
                handleNeighborhoodTypeDropdownChangeCarousel(e.target.value)
              )
            }
          >
            {allChoices}
            {reviews.map((review) => (
              // console.log(review)
              <option
                key={`neighborhoodCarousel ${review._id}`}
                value={review.neighborhood}
              >
                {review.neighborhood}
              </option>
            ))}
          </select>
        </label>
        {/* <input id="dropwdown-submit-button" type="submit" value="Submit" /> */}
      </form>
    </div>
  );
};

export default CarouselNeighborhoodDropdown;
