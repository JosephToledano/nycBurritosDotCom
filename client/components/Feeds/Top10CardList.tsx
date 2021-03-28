import React from "react";
import Carousel from "../Carousel";

const Top10CardList = ({
  reviews,
  reviewsForNeighborhood,
  handleNeighborhoodClick,
  newReview,
  handleFormSubmit,
}): JSX.Element => {
  // const getTopReviews = (reviews) => {
  //   let sortedReviews = reviews.sort((a, b) => {
  //     Number(a.rating) > Number(b.rating) ? 1 : -1;
  //   });
  //   let top10Reviews = [];
  //   for (let i = 0; i < sortedReviews.length; i++) {
  //     if (i < 10) top10Reviews.push(sortedReviews[i]);
  //   }
  //   return top10Reviews;
  // };
  // const topReviews = getTopReviews(reviews);

  return (
    <div className='top10BurritosSection'>
      <p className='top10BurritosText'>Top 10 Burritos in NYC</p>
      <Carousel
        reviewsForNeighborhood={reviewsForNeighborhood}
        handleNeighborhoodClick={handleNeighborhoodClick}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
        reviews={reviews}
      />
    </div>
  );
};

export default Top10CardList;
