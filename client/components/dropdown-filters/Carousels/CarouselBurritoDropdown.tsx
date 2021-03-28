import React from "react";
import { useAppSelector } from "../../../reduxHooks";
import { useDispatch } from "react-redux";
import { handleBurritoTypeDropdownChangeCarousel } from "../../../slices/DropdownsSlice";

const CarouselBurritoDropdown = ({ reviews }) => {
  let allChoices = (
    <option key='0' value='All'>
      All
    </option>
  );

  let burritoDropdownItem = useAppSelector(
    (state) => state.dropdowns.burrito_carousel
  );
  const dispatch = useDispatch();

  return (
    <div className='carousel-dropdown-menu'>
      <form>
        <label>
          Filter by type of burrito:
          <select
            className='dropdown-select'
            value={burritoDropdownItem}
            onChange={(e) =>
              dispatch(handleBurritoTypeDropdownChangeCarousel(e.target.value))
            }
          >
            {allChoices}
            {reviews.map((review) => (
              // console.log(review)
              <option
                key={`burritoTypeCarousel ${review._id}`}
                value={review.burrito_type}
              >
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
