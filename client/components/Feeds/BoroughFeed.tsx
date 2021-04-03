import React, { useState } from "react";
import CarouselBurritoDropdown from "../dropdown-filters/Carousels/CarouselBurritoDropdown";
import CarouselNeighborhoodDropdown from "../dropdown-filters/Carousels/CarouselNeighborhoodDropdown";
import Carousel from "../Carousel";

const BoroughFeed = ({
  reviews,
  reviewsForNeighborhood,
  handleNeighborhoodClick,
  newReview,
  handleFormSubmit,
}): JSX.Element => {
  let boroughs: any = {
    Manhatten: [],
    Brooklyn: [],
    The_Bronx: [],
    Queens: [],
    Staten_Island: [],
  };
  const getReviews = (reviews) => {
    reviews.forEach((review) => {
      if (review.borough === "Manhatten") {
        boroughs.Manhatten.push(review);
      }
      if (review.borough === "Brooklyn") {
        boroughs.Brooklyn.push(review);
      }
      if (review.borough === "The Bronx") {
        boroughs.The_Bronx.push(review);
      }
      if (review.borough === "Queens") {
        boroughs.Queens.push(review);
      }
      if (review.borough === "Staten Island") {
        boroughs.Staten_Island.push(review);
      }
    });
    return boroughs;
  };
  boroughs = getReviews(reviews);

  if (boroughs.Manhatten === undefined) {
    return <p>Loading...</p>;
  } else {
    for (let borough in boroughs) {
      if (borough === "Brooklyn") {
        return (
          <div className='image-parallax-brooklyn'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Brooklyn</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs[borough]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
              </div>
              <Carousel
                key={"Brooklyn"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs[borough]}
              />
            </div>
          </div>
        );
      }
      if (borough === "Manhatten") {
        // return boroughs[borough].map((review, index) => {
        //   console.log('this is the review', review)
        return (
          <div className='image-parallax-manhattan'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Manhatten</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs[borough]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
              </div>
              <Carousel
                key={"Manhatten"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs[borough]}
              />
            </div>
          </div>
        );
      }
      if (borough === "The_Bronx") {
        return (
          <div className='image-parallax-bronx'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>The Bronx</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs[borough]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
              </div>
              <Carousel
                key={"The_Bronx"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs[borough]}
              />
            </div>
          </div>
        );
      }
      if (borough === "Queens") {
        return (
          <div className='image-parallax-queens'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Queens</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs[borough]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
              </div>
              <Carousel
                key={"Queens"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs[borough]}
              />
            </div>
          </div>
        );
      }
      if (borough === "Staten Island") {
        return (
          <div className='image-parallax-staten-island'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Staten Island</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs[borough]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
              </div>
              <Carousel
                key={"Staten Island"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs[borough]}
              />
            </div>
          </div>
        );
      }
    }
  }
};

export default BoroughFeed;
