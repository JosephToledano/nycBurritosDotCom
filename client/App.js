import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainText from './components/MainText.js';
import Nav from './components/Nav.js'
import ReviewCardList from "./components/ReviewCardList";
import ReviewButton from "./components/ReviewButton.js";
import fetch from 'isomorphic-fetch';
import BurritoTypeDropdown from "./components/dropdown-filters/BurritoTypeDropdown.js";
import NeighborhoodTypeDropdown from "./components/dropdown-filters/NeighborhoodTypeDropdown.js";


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
      reviewsForNeighborhood: [],
      reviewsForBurritoType: [],
      reviewSeen: false,
      updateSeen: false,
      burritoTypeDropdownItem: null,
      neighborhoodTypeDropdownItem: null
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
      this.handleDelete = this.handleDelete.bind(this);
      // handlePopUpClick = {this.handlePopUpClick};


      this.handleNeighborhoodClick = this.handleNeighborhoodClick.bind(this);
      this.handleBurritoTypeDropdownChange = this.handleBurritoTypeDropdownChange.bind(this);
      this.handleNeighborhoodTypeDropdownChange = this.handleNeighborhoodTypeDropdownChange.bind(this);

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
            restaurant_name: this.state.newReview.restaurant_name,
            neighborhood: this.state.newReview.neighborhood,
            price: this.state.newReview.price,
            rating: this.state.newReview.rating
          })
    })
    .then((res) => {
          let newRatingToAdd = this.state.newReview;
          let newReviewsArr = this.state.reviews;
          newReviewsArr.unshift(newRatingToAdd)
          let topReview = 0
          newReviewsArr.list.sort((a, b) => (Number(a.rating) > Number(b.rating) ? 1 : -1))
          this.setState({
            reviews : newReviewsArr,
          })
          console.log( 'this is the res' + res)
          this.setState({
            newReview: {
              "id": 0,
              "restaurant_name": "",
              "burrito_type": "",
              "price": 0,
              "neighborhood": "",
              "rating": 0
          }})
          location.reload();
          })
          .catch((err) => {console.log(err)})
  }

handleReviewUpdate = (event) => {
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
            "restaurant_name": "",
            "burrito_type": "",
            "price": 0,
            "neighborhood": "",
            "rating": 0
        }})
        })
        .catch((err) => {console.log(err)})
}

handleDelete = (event) => {
  console.log('this is the event target', event.target.id)
  const deletedId = event.target.id;
  console.log('this is the id', deletedId)
  if(confirm("Do you really want to rob the world of this review")){
    fetch(`/api/deleteReview/${deletedId}`, {
      method: 'DELETE',
     body: JSON.stringify({ 
          _id: deletedId
        })
  });
    location.reload();
}
  };
  // newReview.preventDefault();
  
  
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

handleNeighborhoodClick = (event) => {
  let neighborhoodReviews = this.state.reviews;
  neighborhoodReviews = neighborhoodReviews.filter(review => review.neighborhood == event.target.id)
  console.log('this is the list: ', neighborhoodReviews)
  this.setState({reviewsForNeighborhood: this.state.reviewsForNeighborhood.concat(neighborhoodReviews)})
  console.log('this is the updated state: ', this.state.reviewsForNeighborhood)
}

//handlers for dropdown filters
handleBurritoTypeDropdownChange(event) {
  console.log(event.target.value)
  this.setState({burritoTypeDropdownItem: event.target.value})
}

handleNeighborhoodTypeDropdownChange(event) {
  console.log(event.target.value)
  this.setState({neighborhoodTypeDropdownItem: event.target.value})
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
       <Nav />
       <div className = "dropdown-menus">
          <BurritoTypeDropdown reviews = {this.state.reviews} handleBurritoTypeDropdownChange = {this.handleBurritoTypeDropdownChange} handleDropDownSubmit = {this.handleDropDownSubmit} 
          burritoTypeDropdownItem = {this.state.burritoTypeDropdownItem} neighborhoodTypeDropdownItem = {this.state.neighborhoodTypeDropdownItem}/>
          {/* <BurritoTypeDropdown/> */}
          <NeighborhoodTypeDropdown reviews = {this.state.reviews} 
                                    handleNeighborhoodTypeDropdownChange = {this.handleNeighborhoodTypeDropdownChange} 
                                     neighborhoodTypeDropdownItem = {this.state.neighborhoodTypeDropdownItem}
                                     burritoTypeDropdownItem = {this.state.burritoTypeDropdownItem}
                                     />
       </div>
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

    <ReviewCardList handleDelete ={this.handleDelete} burritoTypeDropdownItem = {this.state.burritoTypeDropdownItem} neighborhoodTypeDropdownItem = {this.state.neighborhoodTypeDropdownItem} reviewsForNeighborhood = {this.state.reviewsForNeighborhood} handleNeighborhoodClick = {this.handleNeighborhoodClick} handleDelete ={this.handleDelete} handleUpdatePopUpClick = {this.handleUpdatePopUpClick} updateSeen = {this.state.updateSeen} reviews = {this.state.reviews} newReview = {this.state.newReview}/>
    </div>
    </div>
    )
  }
}