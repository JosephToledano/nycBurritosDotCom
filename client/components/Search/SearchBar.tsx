import { useAppSelector } from "../../reduxHooks";
import { useDispatch } from "react-redux";
import React from "react";

const SearchBar = () => {
  const reviews = useAppSelector((state) => state.reviews.reviews);

  const onChange = (e) => {};

  return (
    <>
      <div id='search-section'>
        <h4 id='search-section-text'>Search for a 🌯</h4>
        <input
          id='search-bar'
          type='text'
          value=''
          placeholder='Search for a burrito type or restaurant'
        />
      </div>
    </>
  );
};

export default SearchBar;
