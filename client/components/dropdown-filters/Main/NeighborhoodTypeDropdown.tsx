import React from "react";
import { useAppSelector } from "../../../reduxHooks";
import { useDispatch } from "react-redux";
import { handleNeighborhoodTypeDropdownChangeMain } from "../../../slices/DropdownsSlice";

export default function NeighborhoodTypeDropdown() {
  let allChoices = (
    <option key='0' value='All'>
      All
    </option>
  );

  let neighborhoodDropdownItem = useAppSelector(
    (state) => state.dropdowns.neighborhood_main
  );
  let reviews = useAppSelector((state) => state.reviews.reviews);
  const dispatch = useDispatch();
  let filteredReviews = reviews?.reduce((acc, curr) => {
    if (acc.includes(curr?.neighborhood?.toLowerCase()) === false) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return (
    <div>
      <form>
        <label>
          Filter by neighborhood:
          <select
            className='dropdown-select'
            value={neighborhoodDropdownItem}
            onChange={(e) =>
              dispatch(handleNeighborhoodTypeDropdownChangeMain(e.target.value))
            }
          >
            {allChoices}
            {filteredReviews?.map((review) => (
              // console.log(review)
              <option
                key={`neighborhoodMain ${review._id}`}
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
}
