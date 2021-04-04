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

  console.log(boroughs);
  if (boroughs === undefined) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        {boroughs.Brooklyn.length ? (
          <div className='image-parallax-brooklyn'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Brooklyn</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs["Brooklyn"]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs["Brooklyn"]} />
              </div>
              <Carousel
                key={"Brooklyn Carousel"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs["Brooklyn"]}
              />
            </div>
          </div>
        ) : null}
        {boroughs.Manhatten.length ? (
          <div className='image-parallax-manhattan'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Manhatten</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs["Manhatten"]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs["Manhatten"]} />
              </div>
              <Carousel
                key={"Manhatten Carousel"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs["Manhatten"]}
              />
            </div>
          </div>
        ) : null}
        {boroughs.The_Bronx.length ? (
          <div className='image-parallax-bronx'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>The Bronx</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs["The_Bronx"]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs["The_Bronx"]} />
              </div>
              <Carousel
                key={"The_Bronx Carousel"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs["The_Bronx"]}
              />
            </div>
          </div>
        ) : null}
        {boroughs.Queens.length ? (
          <div className='image-parallax-queens'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Queens</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs["Queens"]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown reviews={boroughs["Queens"]} />
              </div>
              <Carousel
                key={"Queens Carousel"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs["Queens"]}
              />
            </div>
          </div>
        ) : null}
        {boroughs.Staten_Island.length ? (
          <div className='image-parallax-staten-island'>
            <div className='carousel-feed-section'>
              <p className='carousel-borough-name'>Staten Island</p>
              <div className='dropdown-menus'>
                <CarouselBurritoDropdown reviews={boroughs["Staten_Island"]} />
                {/* <BurritoTypeDropdown/> */}
                <CarouselNeighborhoodDropdown
                  reviews={boroughs["Staten_Island"]}
                />
              </div>
              <Carousel
                key={"Staten Island Carousel"}
                reviewsForNeighborhood={reviewsForNeighborhood}
                handleNeighborhoodClick={handleNeighborhoodClick}
                newReview={newReview}
                handleFormSubmit={handleFormSubmit}
                reviews={boroughs["Staten_Island"]}
              />
            </div>
          </div>
        ) : null}
      </div>

      // for (let borough in boroughs) {
      //   console.log(borough);
      //   if (borough === "Brooklyn") {
      //     return (
      //       <div className='image-parallax-brooklyn'>
      //         <div className='carousel-feed-section'>
      //           <p className='carousel-borough-name'>Brooklyn</p>
      //           <div className='dropdown-menus'>
      //             <CarouselBurritoDropdown reviews={boroughs[borough]} />
      //             {/* <BurritoTypeDropdown/> */}
      //             <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
      //           </div>
      //           <Carousel
      //             key={"Brooklyn"}
      //             reviewsForNeighborhood={reviewsForNeighborhood}
      //             handleNeighborhoodClick={handleNeighborhoodClick}
      //             newReview={newReview}
      //             handleFormSubmit={handleFormSubmit}
      //             reviews={boroughs[borough]}
      //           />
      //         </div>
      //       </div>
      //     );
      //   }
      //   if (borough === "Manhatten") {
      //     return (
      //       <div className='image-parallax-manhattan'>
      //         <div className='carousel-feed-section'>
      //           <p className='carousel-borough-name'>Manhatten</p>
      //           <div className='dropdown-menus'>
      //             <CarouselBurritoDropdown reviews={boroughs[borough]} />
      //             {/* <BurritoTypeDropdown/> */}
      //             <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
      //           </div>
      //           <Carousel
      //             key={"Manhatten"}
      //             reviewsForNeighborhood={reviewsForNeighborhood}
      //             handleNeighborhoodClick={handleNeighborhoodClick}
      //             newReview={newReview}
      //             handleFormSubmit={handleFormSubmit}
      //             reviews={boroughs[borough]}
      //           />
      //         </div>
      //       </div>
      //     );
      //   } else if (borough === "The_Bronx") {
      //     return (
      //       <div className='image-parallax-bronx'>
      //         <div className='carousel-feed-section'>
      //           <p className='carousel-borough-name'>The Bronx</p>
      //           <div className='dropdown-menus'>
      //             <CarouselBurritoDropdown reviews={boroughs[borough]} />
      //             {/* <BurritoTypeDropdown/> */}
      //             <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
      //           </div>
      //           <Carousel
      //             key={"The_Bronx"}
      //             reviewsForNeighborhood={reviewsForNeighborhood}
      //             handleNeighborhoodClick={handleNeighborhoodClick}
      //             newReview={newReview}
      //             handleFormSubmit={handleFormSubmit}
      //             reviews={boroughs[borough]}
      //           />
      //         </div>
      //       </div>
      //     );
      //   } else if (borough === "Queens") {
      //     return (
      //       <div className='image-parallax-queens'>
      //         <div className='carousel-feed-section'>
      //           <p className='carousel-borough-name'>Queens</p>
      //           <div className='dropdown-menus'>
      //             <CarouselBurritoDropdown reviews={boroughs[borough]} />
      //             {/* <BurritoTypeDropdown/> */}
      //             <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
      //           </div>
      //           <Carousel
      //             key={"Queens"}
      //             reviewsForNeighborhood={reviewsForNeighborhood}
      //             handleNeighborhoodClick={handleNeighborhoodClick}
      //             newReview={newReview}
      //             handleFormSubmit={handleFormSubmit}
      //             reviews={boroughs[borough]}
      //           />
      //         </div>
      //       </div>
      //     );
      //   } else if (borough === "Staten Island") {
      //     return (
      //       <div className='image-parallax-staten-island'>
      //         <div className='carousel-feed-section'>
      //           <p className='carousel-borough-name'>Staten Island</p>
      //           <div className='dropdown-menus'>
      //             <CarouselBurritoDropdown reviews={boroughs[borough]} />
      //             {/* <BurritoTypeDropdown/> */}
      //             <CarouselNeighborhoodDropdown reviews={boroughs[borough]} />
      //           </div>
      //           <Carousel
      //             key={"Staten Island"}
      //             reviewsForNeighborhood={reviewsForNeighborhood}
      //             handleNeighborhoodClick={handleNeighborhoodClick}
      //             newReview={newReview}
      //             handleFormSubmit={handleFormSubmit}
      //             reviews={boroughs[borough]}
      //           />
      //         </div>
      //       </div>
      //     );
      //   }
    );
  }
};

export default BoroughFeed;
