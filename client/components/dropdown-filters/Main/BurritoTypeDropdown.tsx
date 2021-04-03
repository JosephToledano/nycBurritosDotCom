import React from "react";
import { useAppSelector } from "../../../reduxHooks";
import { useDispatch } from "react-redux";
import { handleBurritoTypeDropdownChangeMain } from "../../../slices/DropdownsSlice";

const BurritoTypeDropdown = () => {
  let burritoDropdownItem = useAppSelector(
    (state) => state.dropdowns.burrito_main
  );
  let reviews = useAppSelector((state) => state.reviews.reviews);
  const dispatch = useDispatch();

  let allChoices = (
    <option key='0' value='All'>
      All
    </option>
  );

  let filteredReviews = reviews.reduce((acc, curr) => {
    if (acc.includes(curr.burrito_type.toLowerCase()) === false) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return (
    <div>
      <form>
        <label>
          Filter by type of burrito:
          <select
            className='dropdown-select'
            value={burritoDropdownItem}
            onChange={(e) => {
              console.log(burritoDropdownItem);
              dispatch(handleBurritoTypeDropdownChangeMain(e.target.value));
            }}
          >
            {allChoices}
            {filteredReviews.map((review) => (
              // console.log(review)
              <option
                key={`burritoTypeMain ${review._id}`}
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

export default BurritoTypeDropdown;
