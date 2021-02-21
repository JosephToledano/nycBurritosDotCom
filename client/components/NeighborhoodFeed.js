import React, { useState } from "react";
import Neighborhoods from '../pages/Neighborhoods'
import CarouselBurritoDropdown from './dropdown-filters/Carousels/CarouselBurritoDropdown'
import CarouselNeighborhoodDropdown from './dropdown-filters/Carousels/CarouselNeighborhoodDropdown'
import Carousel from './Carousel'

const NeighborhoodFeed = ({
  reviews,
  handleDelete,
  burritoTypeDropdownItem,
  reviewsForNeighborhood,
  neighborhoodTypeDropdownItem,
  handleBurritoTypeDropdownChange,
  handleNeighborhoodTypeDropdownChange,
  handleNeighborhoodClick,
  handleUpdatePopUpClick,
  updateSeen,
  newReview,
} = props) => {

  const boroughs = {
    Manhatten: [],
    Brooklyn: [],
    The_Bronx: [],
    Queens: [],
    Staten_Island: []
  }
 const getReviews = (reviews) => { 
  reviews.forEach(review => {
    if (review.borough === 'Manhatten'){
      boroughs.Manhatten.push(review)
    }
    if (review.borough === 'Brooklyn'){
      boroughs.Brooklyn.push(review)
    }
    if (review.borough === 'The Bronx'){
      boroughs.The_Bronx.push(review)
    }
    if (review.borough === 'Queens'){
      boroughs.Queens.push(review)
    }
    if (review.borough === 'Staten Island'){
      boroughs.Staten_Island.push(review)
    }
  })
  return boroughs
}
boroughs = getReviews(reviews)

if (reviews.length === 0){
  return <p>Loading...</p> 
} 
else{
for (let borough in boroughs){
  console.log('these are boroughs', boroughs)
  if (borough === 'Brooklyn') {
  return boroughs[borough].map((review, index) => {
      return (
        <div className="carousel-feed-section">
          <p className="carousel-borough-name">Brooklyn</p>
          <div className="dropdown-menus">
            <CarouselBurritoDropdown
              reviews={boroughs[borough]}
              handleBurritoTypeDropdownChange={
                handleBurritoTypeDropdownChange
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
            />
            {/* <BurritoTypeDropdown/> */}
            <CarouselNeighborhoodDropdown
              reviews={boroughs[borough]}
              handleNeighborhoodTypeDropdownChange={
                handleNeighborhoodTypeDropdownChange
              }
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
            />
          </div>
        <Carousel 
            key = {review._id}
            handleDelete={handleDelete}
            burritoTypeDropdownItem={burritoTypeDropdownItem}
            neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
            reviewsForNeighborhood={reviewsForNeighborhood}
            handleNeighborhoodClick={handleNeighborhoodClick}
            handleUpdatePopUpClick={handleUpdatePopUpClick}
            updateSeen={updateSeen}
            reviews={boroughs[borough]}
            newReview={newReview}
        />
        </div>
      )
    })
  }
  if (borough === 'Manhatten') {
    return boroughs[borough].map((review, index) => {
      console.log('this is the review', review)
        return (
          <div className="carousel-feed-section">
            <p className="carousel-borough-name">Manhatten</p>
            <div className="dropdown-menus">
            <CarouselBurritoDropdown
              reviews={boroughs[borough]}
              handleBurritoTypeDropdownChange={
                handleBurritoTypeDropdownChange
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
            />
            {/* <BurritoTypeDropdown/> */}
            <CarouselNeighborhoodDropdown
              reviews={boroughs[borough]}
              handleNeighborhoodTypeDropdownChange={
                handleNeighborhoodTypeDropdownChange
              }
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
            />
          </div>
          <Carousel 
               key = {review._id}
               handleDelete={handleDelete}
               burritoTypeDropdownItem={burritoTypeDropdownItem}
               neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
               reviewsForNeighborhood={reviewsForNeighborhood}
               handleNeighborhoodClick={handleNeighborhoodClick}
               handleUpdatePopUpClick={handleUpdatePopUpClick}
               updateSeen={updateSeen}
               reviews={boroughs[borough]}
               newReview={newReview}
          />
          </div>
        )
      })
    }
    if (borough === 'The_Bronx') {
      return boroughs[borough].map((review, index) => {
          return (
            <div className="carousel-feed-section">
              <p className="carousel-borough-name">The Bronx</p>
              <div className="dropdown-menus">
            <CarouselBurritoDropdown
              reviews={boroughs[borough]}
              handleBurritoTypeDropdownChange={
                handleBurritoTypeDropdownChange
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
            />
            {/* <BurritoTypeDropdown/> */}
            <CarouselNeighborhoodDropdown
              reviews={boroughs[borough]}
              handleNeighborhoodTypeDropdownChange={
                handleNeighborhoodTypeDropdownChange
              }
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
            />
          </div>
            <Carousel 
                  key = {review._id}
                  handleDelete={handleDelete}
                  burritoTypeDropdownItem={burritoTypeDropdownItem}
                  neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                  reviewsForNeighborhood={reviewsForNeighborhood}
                  handleNeighborhoodClick={handleNeighborhoodClick}
                  handleUpdatePopUpClick={handleUpdatePopUpClick}
                  updateSeen={updateSeen}
                  reviews={boroughs[borough]}
                  newReview={newReview}
            />
            </div>
          )
        })
      }
      if (borough === 'Queens') {
        return  boroughs[borough].map((review, index) => {
            return (
              <div className="carousel-feed-section">
                <p className="carousel-borough-name">Queens</p>
                <div className="dropdown-menus">
            <CarouselBurritoDropdown
              reviews={boroughs[borough]}
              handleBurritoTypeDropdownChange={
                handleBurritoTypeDropdownChange
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
            />
            {/* <BurritoTypeDropdown/> */}
            <CarouselNeighborhoodDropdown
              reviews={boroughs[borough]}
              handleNeighborhoodTypeDropdownChange={
                handleNeighborhoodTypeDropdownChange
              }
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
            />
          </div>
              <Carousel 
                 key = {review._id}
                 handleDelete={handleDelete}
                 burritoTypeDropdownItem={burritoTypeDropdownItem}
                 neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                 reviewsForNeighborhood={reviewsForNeighborhood}
                 handleNeighborhoodClick={handleNeighborhoodClick}
                 handleUpdatePopUpClick={handleUpdatePopUpClick}
                 updateSeen={updateSeen}
                 reviews={boroughs[borough]}
                 newReview={newReview}
              />
              </div>
            )
          })
        }
        if (borough === 'Staten Island') {
          return boroughs[borough].map((review, index) => {
              return (
                <div className="carousel-feed-section">
                  <p className="carousel-borough-name">Staten Island</p>
                  <div className="dropdown-menus">
            <CarouselBurritoDropdown
              reviews={boroughs[borough]}
              handleBurritoTypeDropdownChange={
                handleBurritoTypeDropdownChange
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
            />
            {/* <BurritoTypeDropdown/> */}
            <CarouselNeighborhoodDropdown
              reviews={boroughs[borough]}
              handleNeighborhoodTypeDropdownChange={
                handleNeighborhoodTypeDropdownChange
              }
              neighborhoodTypeDropdownItem={
                neighborhoodTypeDropdownItem
              }
              burritoTypeDropdownItem={burritoTypeDropdownItem}
            />
          </div>
                <Carousel 
                    key = {review._id}
                    handleDelete={handleDelete}
                    burritoTypeDropdownItem={burritoTypeDropdownItem}
                    neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
                    reviewsForNeighborhood={reviewsForNeighborhood}
                    handleNeighborhoodClick={handleNeighborhoodClick}
                    handleUpdatePopUpClick={handleUpdatePopUpClick}
                    updateSeen={updateSeen}
                    reviews={boroughs[borough]}
                    newReview={newReview}
                />
                </div>
              )
            })
          }
        }
      }
      } 



export default NeighborhoodFeed