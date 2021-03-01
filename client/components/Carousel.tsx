import React, { useState } from "react";
import ReviewCardList from "./ReviewCardList";

const Carousel = ({
  reviews,
  neighborhoodTypeDropdownItem,
  burritoTypeDropdownItem,
  handleDelete,
  handleNeighborhoodClick,
  reviewsForNeighborhood,
  handleUpdatePopUpClick,
  updateSeen,
  newReview,
  handleRatingChange,
  handlePopUpClick,
  handleFormSubmit,
  handleBurritoTypeChange,
  handleRestaurantNameChange,
  handleNeighborhoodChange,
  handlePriceChange,
}) => {
  const [currentImageIndex, setImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setImageIndex(index);
  };

  console.log("these are the reviews from Carousel", reviews);

  const nextSlide = () => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setImageIndex(index);
  };

  const Arrow = ({ direction, clickFunction, glyph }) => (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );

  const ImageSlide = ({ url }) => {
    return <div className='image-slide'> </div>;
  };
  return (
    <div className='carousel'>
      <Arrow direction='left' clickFunction={previousSlide} glyph='&#9664;' />
      <ReviewCardList
        reviews={reviews.slice(currentImageIndex, currentImageIndex + 4)}
        handleDelete={handleDelete}
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleRatingChange={handleRatingChange}
        handlePopUpClick={handlePopUpClick}
        handleFormSubmit={handleFormSubmit}
        handleBurritoTypeChange={handleBurritoTypeChange}
        handleRestaurantNameChange={handleRestaurantNameChange}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handlePriceChange={handlePriceChange}
      />
      <Arrow
        // className={Arrow}
        direction='right'
        clickFunction={nextSlide}
        glyph='&#9654;'
      />
    </div>
  );
};

export default Carousel;
