import React, { useState } from "react";
import CarouselBurritoDropdown from "../dropdown-filters/Carousels/CarouselBurritoDropdown";
import CarouselNeighborhoodDropdown from "../dropdown-filters/Carousels/CarouselNeighborhoodDropdown";
import Carousel from "../Carousel";

const BoroughFeed = ({
  reviews,
  burritoTypeDropdownItem,
  reviewsForNeighborhood,
  neighborhoodTypeDropdownItem,
  handleBurritoTypeDropdownChange,
  handleNeighborhoodTypeDropdownChange,
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
  console.log("reviews from BoroughFeed", reviews);
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
      console.log("these are boroughs", boroughs);
      if (borough === "Brooklyn") {
        return (
          <div className='carousel-feed-section'>
            <p className='carousel-borough-name'>Brooklyn</p>
            <div className='dropdown-menus'>
              <CarouselBurritoDropdown
                reviews={boroughs[borough]}
                handleBurritoTypeDropdownChange={
                  handleBurritoTypeDropdownChange
                }
                burritoTypeDropdownItem={burritoTypeDropdownItem}
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              />
              {/* <BurritoTypeDropdown/> */}
              <CarouselNeighborhoodDropdown
                reviews={boroughs[borough]}
                handleNeighborhoodTypeDropdownChange={
                  handleNeighborhoodTypeDropdownChange
                }
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                burritoTypeDropdownItem={burritoTypeDropdownItem}
              />
            </div>
            <Carousel
              key={"Brooklyn"}
              reviewsForNeighborhood={reviewsForNeighborhood}
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              handleNeighborhoodClick={handleNeighborhoodClick}
              newReview={newReview}
              handleFormSubmit={handleFormSubmit}
              reviews={boroughs[borough]}
            />
          </div>
        );
      }
      if (borough === "Manhatten") {
        // return boroughs[borough].map((review, index) => {
        //   console.log('this is the review', review)
        return (
          <div className='carousel-feed-section'>
            <p className='carousel-borough-name'>Manhatten</p>
            <div className='dropdown-menus'>
              <CarouselBurritoDropdown
                reviews={boroughs[borough]}
                handleBurritoTypeDropdownChange={
                  handleBurritoTypeDropdownChange
                }
                burritoTypeDropdownItem={burritoTypeDropdownItem}
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              />
              {/* <BurritoTypeDropdown/> */}
              <CarouselNeighborhoodDropdown
                reviews={boroughs[borough]}
                handleNeighborhoodTypeDropdownChange={
                  handleNeighborhoodTypeDropdownChange
                }
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                burritoTypeDropdownItem={burritoTypeDropdownItem}
              />
            </div>
            <Carousel
              key={"Manhatten"}
              reviewsForNeighborhood={reviewsForNeighborhood}
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              handleNeighborhoodClick={handleNeighborhoodClick}
              newReview={newReview}
              handleFormSubmit={handleFormSubmit}
              reviews={boroughs[borough]}
            />
          </div>
        );
      }
      if (borough === "The_Bronx") {
        return (
          <div className='carousel-feed-section'>
            <p className='carousel-borough-name'>The Bronx</p>
            <div className='dropdown-menus'>
              <CarouselBurritoDropdown
                reviews={boroughs[borough]}
                handleBurritoTypeDropdownChange={
                  handleBurritoTypeDropdownChange
                }
                burritoTypeDropdownItem={burritoTypeDropdownItem}
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              />
              {/* <BurritoTypeDropdown/> */}
              <CarouselNeighborhoodDropdown
                reviews={boroughs[borough]}
                handleNeighborhoodTypeDropdownChange={
                  handleNeighborhoodTypeDropdownChange
                }
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                burritoTypeDropdownItem={burritoTypeDropdownItem}
              />
            </div>
            <Carousel
              key={"The_Bronx"}
              reviewsForNeighborhood={reviewsForNeighborhood}
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              handleNeighborhoodClick={handleNeighborhoodClick}
              newReview={newReview}
              handleFormSubmit={handleFormSubmit}
              reviews={boroughs[borough]}
            />
          </div>
        );
      }
      if (borough === "Queens") {
        return (
          <div className='carousel-feed-section'>
            <p className='carousel-borough-name'>Queens</p>
            <div className='dropdown-menus'>
              <CarouselBurritoDropdown
                reviews={boroughs[borough]}
                handleBurritoTypeDropdownChange={
                  handleBurritoTypeDropdownChange
                }
                burritoTypeDropdownItem={burritoTypeDropdownItem}
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              />
              {/* <BurritoTypeDropdown/> */}
              <CarouselNeighborhoodDropdown
                reviews={boroughs[borough]}
                handleNeighborhoodTypeDropdownChange={
                  handleNeighborhoodTypeDropdownChange
                }
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                burritoTypeDropdownItem={burritoTypeDropdownItem}
              />
            </div>
            <Carousel
              key={"Queens"}
              reviewsForNeighborhood={reviewsForNeighborhood}
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              handleNeighborhoodClick={handleNeighborhoodClick}
              newReview={newReview}
              handleFormSubmit={handleFormSubmit}
              reviews={boroughs[borough]}
            />
          </div>
        );
      }
      if (borough === "Staten Island") {
        return (
          <div className='carousel-feed-section'>
            <p className='carousel-borough-name'>Staten Island</p>
            <div className='dropdown-menus'>
              <CarouselBurritoDropdown
                reviews={boroughs[borough]}
                handleBurritoTypeDropdownChange={
                  handleBurritoTypeDropdownChange
                }
                burritoTypeDropdownItem={burritoTypeDropdownItem}
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              />
              {/* <BurritoTypeDropdown/> */}
              <CarouselNeighborhoodDropdown
                reviews={boroughs[borough]}
                handleNeighborhoodTypeDropdownChange={
                  handleNeighborhoodTypeDropdownChange
                }
                neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                burritoTypeDropdownItem={burritoTypeDropdownItem}
              />
            </div>
            <Carousel
              key={"Staten Island"}
              reviewsForNeighborhood={reviewsForNeighborhood}
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
              handleNeighborhoodClick={handleNeighborhoodClick}
              newReview={newReview}
              handleFormSubmit={handleFormSubmit}
              reviews={boroughs[borough]}
            />
          </div>
        );
      }
    }
  }
};

export default BoroughFeed;
