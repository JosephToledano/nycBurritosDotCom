import * as React from "react";
// import "./index.css";
import MainText from "./components/MainText.js";
import Nav from "./components/Nav.js";
import ReviewCardList from "./components/ReviewCardList";
import ReviewButton from "./components/ReviewButton.js";
import LoginBox from "./components/LoginBox";
import ReviewCardCarousel from "./components/Carousel";
// import fetch from "isomorphic-fetch";
import BurritoTypeDropdown from "./components/dropdown-filters/Main/BurritoTypeDropdown.js";
import NeighborhoodTypeDropdown from "./components/dropdown-filters/Main/NeighborhoodTypeDropdown.js";
import BoroughFeed from "./components/BoroughFeed";
import Carousel from "./components/Carousel";
import Top10CardList from "./components/Top10CardList.js";
import FeedContainer from "./components/FeedContainer.js";

interface AppState {
  newReview: any;
  reviews: any;
  reviewsForNeighborhood: any;
  reviewsForBurritoType: any;
  reviewSeen: boolean;
  updateSeen: boolean;
  burritoTypeDropdownItem: string;
  neighborhoodTypeDropdownItem: string;
  isLoggedIn: boolean;
  currentUser: string;
  currentUserId: number;
  failedLogin: boolean;
}

class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      newReview: {
        id: 0,
        burrito_type: "",
        restaurant_name: "",
        restaurant_image_url: "",
        neighborhood: "",
        borough: "",
        price: 0,
        rating: 0,
      },
      reviews: [],
      reviewsForNeighborhood: [],
      reviewsForBurritoType: [],
      reviewSeen: false,
      updateSeen: false,
      burritoTypeDropdownItem: null,
      neighborhoodTypeDropdownItem: null,
      currentUserId: -1,
      isLoggedIn: false,
      currentUser: "",
      failedLogin: false,
    };
    this.handleReviewPopUpClick = this.handleReviewPopUpClick.bind(this);
    this.handleUpdatePopUpClick = this.handleUpdatePopUpClick.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleBurritoTypeChange = this.handleBurritoTypeChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleNeighborhoodChange = this.handleNeighborhoodChange.bind(this);
    this.handleBoroughChange = this.handleBoroughChange.bind(this);
    this.handleRestaurantNameChange = this.handleRestaurantNameChange.bind(
      this
    );
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleReviewUpdate = this.handleReviewUpdate.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // handlePopUpClick = {this.handlePopUpClick};

    this.handleNeighborhoodClick = this.handleNeighborhoodClick.bind(this);
    this.handleBurritoTypeDropdownChange = this.handleBurritoTypeDropdownChange.bind(
      this
    );
    this.handleNeighborhoodTypeDropdownChange = this.handleNeighborhoodTypeDropdownChange.bind(
      this
    );
  }

  componentDidMount() {
    console.log(this.state.reviews);
    fetch("/api")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log("this is the response", response);
        let currentReviews = this.state.reviews;
        response.forEach((review) => currentReviews.push(review));
        this.setState({ reviews: currentReviews });
      })
      .catch((err) => console.log(err));
  }

  // event handler for when user hits log in button
  handleLogin(username, password) {
    console.log("these are the username and password", username, password);
    fetch("login/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("this is the data: ", data);
        if (!data.username) {
          this.setState({
            failedLogin: true,
          });
        } else if (this.state.failedLogin) {
          this.setState({
            failedLogin: false,
          });
        }
        this.setState((prevState) => {
          const newState = { ...prevState };
          newState.currentUser = data.username;
          newState.isLoggedIn = true;
          newState.currentUserId = data.user_id;
          return newState;
        });
      })
      .catch((err) => console.log(err));
  }

  // event handler for when user hits log in button
  handleSignUp(username, password): void {
    fetch("signup/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState((prevState) => {
          const newState = { ...prevState };
          newState.currentUser = data.username;
          newState.currentUserId = data.user_id;
          newState.isLoggedIn = true;
          return newState;
        });
      })
      .catch((err) => console.log(err));
  }

  handleFormSubmit = (newReview): void => {
    newReview.preventDefault();
    // if (this.state.currentUserId === -1) {
    //   alert("Please login to submit a review");
    //   return;
    // }
    fetch("api/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        user_id: this.state.currentUserId,
        id: this.state.newReview.id,
        burrito_type: this.state.newReview.burrito_type,
        restaurant_name: this.state.newReview.restaurant_name,
        borough: this.state.newReview.borough,
        neighborhood: this.state.newReview.neighborhood,
        price: this.state.newReview.price,
        rating: this.state.newReview.rating,
      }),
    })
      .then((res) => {
        console.log("this is the res", res);
        let newRatingToAdd = this.state.newReview;
        let newReviewsArr = this.state.reviews;
        newReviewsArr.unshift(newRatingToAdd);
        let topReview = 0;
        newReviewsArr.list.sort((a, b) =>
          Number(a.rating) > Number(b.rating) ? 1 : -1
        );
        this.setState({
          reviews: newReviewsArr,
        });
        console.log("this is the res" + res);
        this.setState({
          newReview: {
            id: 0,
            restaurant_name: "",
            restaurant_image_url: "",
            burrito_type: "",
            price: 0,
            neighborhood: "",
            borough: "",
            rating: 0,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleReviewUpdate = (event): void => {
    fetch(`api/updateReview/{event.target.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        id: this.state.newReview.id,
        burrito_type: this.state.newReview.burrito_type,
        restaurant_type: this.state.newReview.restaurant_type,
        restaurant_image_url: this.state.newReview.restaurant_image_url,
        neighborhood: this.state.newReview.neighborhood,
        borough: this.state.newReview.borough,
        price: this.state.newReview.price,
        rating: this.state.newReview.rating,
      }),
    })
      .then((res) => {
        let parsed = res.json();
        let reviewUpdate = this.state.newReview;
        let newReviewsArr = this.state.reviews;
        newReviewsArr.forEach((review) => {
          if (review.id === reviewUpdate.id) {
            review = reviewUpdate;
          }
        });
        this.setState({
          reviews: newReviewsArr,
        });
        console.log("this is the res" + res);
        this.setState({
          newReview: {
            id: 0,
            restaurant_name: "",
            burrito_type: "",
            price: 0,
            restaurant_image_url: "",
            neighborhood: "",
            borough: "",
            rating: 0,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDelete = (event): void => {
    console.log("this is the event target", event.target.id);
    const deletedId = event.target.id;
    console.log("this is the id", deletedId);
    if (confirm("Do you really want to rob the world of this review")) {
      fetch(`/api/deleteReview/${deletedId}`, {
        method: "DELETE",
        body: JSON.stringify({
          _id: deletedId,
        }),
      });
      location.reload();
    }
  };
  // newReview.preventDefault();

  handleReviewPopUpClick = (): void => {
    if (this.state.reviewSeen === false) {
      this.setState({ reviewSeen: true });
      console.log("you clicked me");
    } else {
      this.setState({
        reviewSeen: false,
      });
    }
    console.log("wtf");
  };
  handleUpdatePopUpClick = (): void => {
    if (this.state.updateSeen === false) {
      this.setState({ updateSeen: true });
      console.log("you clicked me");
    } else {
      this.setState({
        updateSeen: false,
      });
    }
    console.log("wtf");
  };

  handleNeighborhoodClick = (event) => {
    let neighborhoodReviews = this.state.reviews;
    neighborhoodReviews = neighborhoodReviews.filter(
      (review) => review.neighborhood == event.target.id
    );
    console.log("this is the list: ", neighborhoodReviews);
    this.setState({
      reviewsForNeighborhood: this.state.reviewsForNeighborhood.concat(
        neighborhoodReviews
      ),
    });
    console.log(
      "this is the updated state: ",
      this.state.reviewsForNeighborhood
    );
  };

  //handlers for dropdown filters
  handleBurritoTypeDropdownChange(event) {
    console.log(event.target.value);
    this.setState({ burritoTypeDropdownItem: event.target.value });
  }

  handleNeighborhoodTypeDropdownChange(event) {
    console.log(event.target.value);
    this.setState({ neighborhoodTypeDropdownItem: event.target.value });
  }

  //handlers for different fields in burrito submission fields
  handleBurritoTypeChange(event) {
    console.log(event);
    let updatedReviewList = this.state.newReview;
    updatedReviewList.burrito_type = event.target.value;
    this.setState({ newReview: updatedReviewList });
  }

  handleRestaurantNameChange(event) {
    console.log(event);
    let updatedReviewList = this.state.newReview;
    updatedReviewList.restaurant_name = event.target.value;
    this.setState({ newReview: updatedReviewList });
  }

  handleNeighborhoodChange(event) {
    console.log(event);
    let updatedReviewList = this.state.newReview;
    updatedReviewList.neighborhood = event.target.value;
    this.setState({ newReview: updatedReviewList });
  }

  handleBoroughChange(event) {
    console.log(event);
    let updatedReviewList = this.state.newReview;
    updatedReviewList.borough = event.target.value;
    this.setState({ newReview: updatedReviewList });
  }

  handlePriceChange(event) {
    console.log(event);
    let updatedReviewList = this.state.newReview;
    updatedReviewList.price = event.target.value;
    this.setState({ newReview: updatedReviewList });
  }

  handleRatingChange(event) {
    console.log(event);
    let updatedReviewList = this.state.newReview;
    updatedReviewList.rating = event.target.value;
    this.setState({ newReview: updatedReviewList });
  }

  googleLogin() {
    fetch("/google", {
      method: "GET",
      headers: {
        "Content-Type": "Application/JSON",
      },
    });
  }

  render() {
    return (
      <>
        <React.Fragment>
          <Nav
            handleLogin={this.handleLogin}
            handleSignUp={this.handleSignUp}
            currentUser={this.state.currentUser}
            googleLogin={this.googleLogin}
            failedLogin={this.state.failedLogin}
          />
          <MainText />
          <ReviewButton
            reviewSeen={this.state.reviewSeen}
            handleReviewPopUpClick={this.handleReviewPopUpClick}
            handleBurritoTypeChange={this.handleBurritoTypeChange}
            handleRatingChange={this.handleRatingChange}
            handleRestaurantNameChange={this.handleRestaurantNameChange}
            handlePriceChange={this.handlePriceChange}
            handleNeighborhoodChange={this.handleNeighborhoodChange}
            handleBoroughChange={this.handleBoroughChange}
            handleFormSubmit={this.handleFormSubmit}
            newReview={this.state.newReview}
          />
          <div className='dropdown-menus'>
            <BurritoTypeDropdown
              reviews={this.state.reviews}
              handleBurritoTypeDropdownChange={
                this.handleBurritoTypeDropdownChange
              }
              burritoTypeDropdownItem={this.state.burritoTypeDropdownItem}
              neighborhoodTypeDropdownItem={
                this.state.neighborhoodTypeDropdownItem
              }
            />
            {/* <BurritoTypeDropdown/> */}
            <NeighborhoodTypeDropdown
              reviews={this.state.reviews}
              handleNeighborhoodTypeDropdownChange={
                this.handleNeighborhoodTypeDropdownChange
              }
              neighborhoodTypeDropdownItem={
                this.state.neighborhoodTypeDropdownItem
              }
              burritoTypeDropdownItem={this.state.burritoTypeDropdownItem}
            />
          </div>
        </React.Fragment>
        <Top10CardList
          handleDelete={this.handleDelete}
          burritoTypeDropdownItem={this.state.burritoTypeDropdownItem}
          neighborhoodTypeDropdownItem={this.state.neighborhoodTypeDropdownItem}
          reviewsForNeighborhood={this.state.reviewsForNeighborhood}
          handleNeighborhoodClick={this.handleNeighborhoodClick}
          handleUpdatePopUpClick={this.handleUpdatePopUpClick}
          updateSeen={this.state.updateSeen}
          reviews={this.state.reviews}
          newReview={this.state.newReview}
          handleBurritoTypeDropdownChange={this.handleBurritoTypeDropdownChange}
          handleNeighborhoodTypeDropdownChange={
            this.handleNeighborhoodTypeDropdownChange
          }
        />
        <p className='homepageCarouselHeader'>All Reviews</p>
        <Carousel
          handleDelete={this.handleDelete}
          burritoTypeDropdownItem={this.state.burritoTypeDropdownItem}
          neighborhoodTypeDropdownItem={this.state.neighborhoodTypeDropdownItem}
          reviewsForNeighborhood={this.state.reviewsForNeighborhood}
          handleNeighborhoodClick={this.handleNeighborhoodClick}
          handleUpdatePopUpClick={this.handleUpdatePopUpClick}
          updateSeen={this.state.updateSeen}
          reviews={this.state.reviews}
          newReview={this.state.newReview}
        />
        <FeedContainer
          handleDelete={this.handleDelete}
          burritoTypeDropdownItem={this.state.burritoTypeDropdownItem}
          neighborhoodTypeDropdownItem={this.state.neighborhoodTypeDropdownItem}
          reviewsForNeighborhood={this.state.reviewsForNeighborhood}
          handleNeighborhoodClick={this.handleNeighborhoodClick}
          handleUpdatePopUpClick={this.handleUpdatePopUpClick}
          updateSeen={this.state.updateSeen}
          reviews={this.state.reviews}
          newReview={this.state.newReview}
          handleBurritoTypeDropdownChange={this.handleBurritoTypeDropdownChange}
          handleNeighborhoodTypeDropdownChange={
            this.handleNeighborhoodTypeDropdownChange
          }
        />

        {/* <ReviewCardList
            handleDelete={this.handleDelete}
            burritoTypeDropdownItem={this.state.burritoTypeDropdownItem}
            neighborhoodTypeDropdownItem={
              this.state.neighborhoodTypeDropdownItem
            }
            reviewsForNeighborhood={this.state.reviewsForNeighborhood}
            handleNeighborhoodClick={this.handleNeighborhoodClick}
            handleUpdatePopUpClick={this.handleUpdatePopUpClick}
            updateSeen={this.state.updateSeen}
            reviews={this.state.reviews}
            newReview={this.state.newReview}
          /> */}
      </>
    );
  }
}

export default App;
