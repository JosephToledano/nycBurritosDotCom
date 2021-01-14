import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainText from './components/MainText.js';
import Header from './components/Header.js'
import ReviewCardList from "./components/ReviewCardList";
import ReviewButton from "./components/ReviewButton.js";
import fetch from 'isomorphic-fetch';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newReview: {
        "id": 0,
        "burrito_type": "",
        "restaurant_name": "",
        "neighborhood": "",
        "price": 0,
        "rating": 0
        },
      reviews: [],
      reviewSeen: false,
      updateSeen: false
    }
      this.handleReviewPopUpClick = this.handleReviewPopUpClick.bind(this);
      this.handleUpdatePopUpClick = this.handleUpdatePopUpClick.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleBurritoTypeChange = this.handleBurritoTypeChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleNeighborhoodChange = this.handleNeighborhoodChange.bind(this);
      this.handleRestaurantNameChange = this.handleRestaurantNameChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleReviewUpdate = this.handleReviewUpdate.bind(this);
      // this.handleDropDownSubmit = this.handleDropDownSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.state.reviews)
    fetch('api/')
    .then((data) => {
      return data.json()
    })
    .then((response) => {
      console.log('this is the response', response)
      let currentReviews = this.state.reviews
      response.forEach(review => currentReviews.push(review))
      this.setState({ reviews: currentReviews })
    })
    .catch((err) => console.log(err));
  }

  handleFormSubmit = (newReview) => {
    newReview.preventDefault();
    fetch('api/addReview', {
      method: 'POST',
      headers: {
      'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({ 
            id: this.state.newReview.id,
            burrito_type: this.state.newReview.burrito_type,
            restaurant_type: this.state.newReview.restaurant_type,
            neighborhood: this.state.newReview.neighborhood,
            price: this.state.newReview.price,
            rating: this.state.newReview.rating
          })
    })
    .then((res) => {
          let newRatingToAdd = this.state.newReview;
          let newReviewsArr = this.state.reviews;
          newReviewsArr.unshift(newRatingToAdd)
          this.setState({
            reviews : newReviewsArr,
          })
          console.log( 'this is the res' + res)
          this.setState({
            newReview: {
              "id": 0,
              "restuarant": "",
              "burrito_type": "",
              "price": 0,
              "neighborhood": "",
              "rating": 0
          }})
          })
          .catch((err) => {console.log(err)})
  }

handleReviewUpdate = (event) => {
  newReview.preventDefault();
  fetch(`api/updateReview/{event.target.id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify({ 
          id: this.state.newReview.id,
          burrito_type: this.state.newReview.burrito_type,
          restaurant_type: this.state.newReview.restaurant_type,
          neighborhood: this.state.newReview.neighborhood,
          price: this.state.newReview.price,
          rating: this.state.newReview.rating
        })
  })
  .then((res) => {
        let reviewUpdate = this.state.newReview;
        let newReviewsArr = this.state.reviews;
        newReviewsArr.forEach(review => {
          if (review.id === reviewUpdate.id){
            review = reviewUpdate;
          }
        })
        this.setState({
          reviews : newReviewsArr,
        })
        console.log( 'this is the res' + res)
        this.setState({
          newReview: {
            "id": 0,
            "restuarant": "",
            "burrito_type": "",
            "price": 0,
            "neighborhood": "",
            "rating": 0
        }})
        })
        .catch((err) => {console.log(err)})
}

handleReviewDelete = (event) => {
  newReview.preventDefault();
  fetch(`api/deleteReview/{event.target.id}`, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify({ 
          id: this.state.newReview.id,
        })
  })
  .then((res) => {
        let newReviewsArr = this.state.reviews;
        newReviewsArr.forEach(review => {
          if (review.id === reviewUpdate.id){
            review = reviewUpdate;
          }
        })
        this.setState({
          reviews : newReviewsArr,
        })
        })
        .catch((err) => {console.log(err)})
}
  
handleReviewPopUpClick = () => {
  if (this.state.reviewSeen === false){
    this.setState({ reviewSeen: true});
      console.log('you clicked me')
    } else{
        this.setState({
          reviewSeen: false
         });
      }
    console.log('wtf')
  }
handleUpdatePopUpClick = () => {
  if (this.state.updateSeen === false){
    this.setState({ updateSeen: true});
      console.log('you clicked me')
    } else{
        this.setState({
          updateSeen: false
         });
      }
    console.log('wtf')
    }

//handlers for different fields in burrito submission fields
handleBurritoTypeChange(event) {
  console.log(event)
  let updatedReviewList = this.state.newReview
  updatedReviewList.burrito_type = event.target.value
  this.setState({newReview: updatedReviewList})
}

handleRestaurantNameChange(event) {
  console.log(event)
  let updatedReviewList = this.state.newReview
  updatedReviewList.restaurant_name = event.target.value
  this.setState({newReview: updatedReviewList})
}

handleNeighborhoodChange(event) {
  console.log(event)
  let updatedReviewList = this.state.newReview
  updatedReviewList.neighborhood = event.target.value
  this.setState({newReview: updatedReviewList})
}

handlePriceChange(event) {
  console.log(event)
  let updatedReviewList = this.state.newReview
  updatedReviewList.price = event.target.value
  this.setState({newReview: updatedReviewList})
}

handleRatingChange(event) {
  console.log(event)
  let updatedReviewList = this.state.newReview
  updatedReviewList.rating = event.target.value
  this.setState({newReview: updatedReviewList})
}




render() {
    return (
      <div className='main-page'>
       <Header />
       <ReviewButton 
        reviewSeen = {this.state.reviewSeen} 
        handleReviewPopUpClick = {this.handleReviewPopUpClick}
        handleBurritoTypeChange = {this.handleBurritoTypeChange} 
        handleRatingChange = {this.handleRatingChange}
        handleRestaurantNameChange = {this.handleRestaurantNameChange}
        handlePriceChange = {this.handlePriceChange}
        handleNeighborhoodChange = {this.handleNeighborhoodChange}
        handleFormSubmit = {this.handleFormSubmit}
        newReview = {this.state.newReview}
        />                           
    <div className= "main-container">
    <MainText />

    <ReviewCardList  handleUpdatePopUpClick = {this.handleUpdatePopUpClick} updateSeen = {this.state.updateSeen} reviews = {this.state.reviews} newReview = {this.state.newReview}/>
    </div>
    </div>
    )
  }
}