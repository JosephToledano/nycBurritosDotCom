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

  let filteredReviews = reviews?.reduce((acc, curr) => {
    if (acc.includes(curr?.neighborhood?.toLowerCase()) === false) {
      acc.push(curr);
    }
    return acc;
  }, []);

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
            {filteredReviews?.map((review) => (
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
