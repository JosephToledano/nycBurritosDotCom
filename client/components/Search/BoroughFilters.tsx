import { useAppSelector } from "../../reduxHooks";
import { useDispatch } from "react-redux";
import React from "react";

const BoroughFilters = () => {
  const reviews = useAppSelector((state) => state.reviews.reviews);
  let boroughs = [
    "Brooklyn",
    "The Bronx",
    "Manhattan",
    "Queens",
    "Staten Island",
  ];

  return (
    <div id='borough-filter-container'>
      {boroughs.map((borough, idx) => {
        return (
          <div className='borough-search-filter' key={"borough filter " + idx}>
            <p className='borough-search-filter-text'> {borough} </p>
          </div>
        );
      })}
    </div>
  );
};

export default BoroughFilters;
