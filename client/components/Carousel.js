import React, { useState } from "react";
import ReviewCardList from "./ReviewCardList";

const Carousel = ({
  reviews,
  handleDelete,
  burritoTypeDropdownItem,
  neighborhoodTypeDropdownItem,
  handleNeighborhoodClick,
  updateSeen,
  newReview,
} = props) => {
  const [currentImageIndex, setImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setImageIndex((currentImageIndex = index));
  };

  const nextSlide = () => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setImageIndex((currentImageIndex = index));
  };

  const Arrow = ({ direction, clickFunction, glyph }) => (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );

  const ImageSlide = ({ url }) => {
    console.log('this is the reviews from carousel', reviews)
    // const styles = {
    //   backgroundImage: `url(${url})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // };
    return <div className="image-slide"> </div>;
  };

  return (
    <div className="carousel">
      <Arrow direction="left" clickFunction={previousSlide} glyph="&#9664;" />
      <ReviewCardList
        reviews={reviews.slice(currentImageIndex, currentImageIndex + 4)}
        handleDelete={handleDelete}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        updateSee={updateSeen}
        newReview={newReview}
      />
      <Arrow className ={Arrow} direction="right" clickFunction={nextSlide} glyph="&#9654;" />
    </div>
  );
};
export default Carousel;
