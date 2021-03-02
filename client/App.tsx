import * as React from "react";
// import "./index.css";
import MainText from "./components/MainText";
import Nav from "./components/Nav/Nav";
import ReviewCardList from "./components/Feeds/ReviewCardList";
import ReviewButton from "./components/ReviewButton";
import LoginBox from "./components/Nav/LoginBox";
import ReviewCardCarousel from "./components/Carousel";
// import fetch from "isomorphic-fetch";
import BurritoTypeDropdown from "./components/dropdown-filters/Main/BurritoTypeDropdown";
import NeighborhoodTypeDropdown from "./components/dropdown-filters/Main/NeighborhoodTypeDropdown";
import BoroughFeed from "./components/Feeds/BoroughFeed";
import Carousel from "./components/Carousel";
import Top10CardList from "./components/Feeds/Top10CardList";
import FeedContainer from "./components/Feeds/FeedContainer";

//Types and interfaces used
interface newReview {
  id: number;
  burrito_type: string;
  restaurant_name: string;
  restaurant_image_url: string;
  neighborhood: string;
  borough: string;
  price: number;
  rating: number;
}

type failedLogin = {
  failedLogin: boolean;
};

type reviewSeen = {
  reviewSeen: boolean;
};

type updateSeen = {
  updateSeen: boolean;
};

type currentUser = {
  currentUser: string;
};

type currentUserId = {
  currentUserId: number;
};

type neighborhoodTypeDropdownItem = {
  neighborhoodDropdownItem: string;
};

type burritoTypeDropdownItem = {
  burritoTypeDropdownItem: string;
};

type reviewsForBurritoType = {
  reviewsForBurritoType: newReview[];
};

type reviewsForNeighborhood = {
  reviewsForNeighborhood: newReview[];
};

type reviewsForBorough = {
  reviewsForBorough: newReview[];
};

type reviews = {
  reviews: newReview[];
};

let reviews: Array<newReview> = [
  {
    id: 0,
    burrito_type: "cheese",
    restaurant_name: "Chipotle",
    restaurant_image_url: "string",
    neighborhood: "string",
    borough: "string",
    price: 10,
    rating: 10,
  },
];

const App: React.FC = () => {
  const [newReview, setNewReview] = React.useState<newReview>({
    id: 0,
    burrito_type: "",
    restaurant_name: "",
    restaurant_image_url: "",
    neighborhood: "",
    borough: "",
    price: 0,
    rating: 0,
  });
  const [reviews, setReviews] = React.useState<newReview[]>([]);
  const [reviewsForNeighborhood, setReviewsForNeighbohood] = React.useState<
    newReview[]
  >([]);
  const [
    reviewsForBurritoType,
    setReviewsForBurritoType,
  ] = React.useState<reviewsForBurritoType>();
  const [reviewSeen, setReviewSeen] = React.useState<boolean>(false);
  const [updateSeen, setUpdateSeen] = React.useState<boolean>(false);
  const [
    burritoTypeDropdownItem,
    setBurritoTypeDropdownItem,
  ] = React.useState<string>(null);
  const [
    neighborhoodTypeDropdownItem,
    setNeighborhoodTypeDropdownItem,
  ] = React.useState<string>(null);
  const [currentUserId, setCurrentUserId] = React.useState<number>(-1);
  const [currentUser, setCurrentUser] = React.useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [failedLogin, setFailedLogin] = React.useState<boolean>(false);

  React.useEffect((): void => {
    fetch("/api")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log("this is the response", response);
        let currentReviews = reviews;
        response.forEach((review) => currentReviews.push(review));
        setReviews(currentReviews);
      })
      .catch((err) => console.log(err));
  }, [reviews]);

  React.useEffect((): void => {
    setReviews(reviews);
  }, []);
  // event handler for when user hits log in button
  const handleLogin = (username: string, password: string): void => {
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
          setFailedLogin(true);
        } else if (failedLogin) {
          setFailedLogin(false);
        }
        setCurrentUser(data.username);
        setIsLoggedIn(true);
        setCurrentUserId(data.user_id);
      })
      .catch((err) => console.log(err));
  };

  // event handler for when user hits log in button
  const handleSignUp = (username: string, password: string): void => {
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
        setCurrentUser(data.username);
        setIsLoggedIn(true);
        setCurrentUserId(data.user_id);
      })
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (e, newReview: newReview): void => {
    e.preventDefault();
    if (currentUserId === -1) {
      alert("Please login to submit a review");
      return;
    }
    fetch("api/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        user_id: currentUserId,
        id: newReview.id,
        burrito_type: newReview.burrito_type,
        restaurant_name: newReview.restaurant_name,
        borough: newReview.borough,
        neighborhood: newReview.neighborhood,
        price: newReview.price,
        rating: newReview.rating,
      }),
    })
      .then((res) => {
        console.log("this is the res", res);
        let newRatingToAdd = newReview;
        let newReviewsArr = reviews;
        newReviewsArr.unshift(newRatingToAdd);
        let topReview = 0;
        newReviewsArr.sort((a, b) =>
          Number(a.rating) > Number(b.rating) ? 1 : -1
        );
        setReviews(newReviewsArr);
        console.log("this is the res" + res);
        setNewReview({
          id: 0,
          restaurant_name: "",
          restaurant_image_url: "",
          burrito_type: "",
          price: 0,
          neighborhood: "",
          borough: "",
          rating: 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReviewUpdate = (event): void => {
    fetch(`api/updateReview/{event.target.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        id: newReview.id,
        burrito_type: newReview.burrito_type,
        restaurant_type: newReview.restaurant_name,
        restaurant_image_url: newReview.restaurant_image_url,
        neighborhood: newReview.neighborhood,
        borough: newReview.borough,
        price: newReview.price,
        rating: newReview.rating,
      }),
    })
      .then((res) => {
        let parsed = res.json();
        let reviewUpdate = newReview;
        let newReviewsArr = reviews;
        newReviewsArr.forEach((review) => {
          if (review.id === reviewUpdate.id) {
            review = reviewUpdate;
          }
        });
        setReviews(newReviewsArr);
        setNewReview({
          id: 0,
          restaurant_name: "",
          burrito_type: "",
          price: 0,
          restaurant_image_url: "",
          neighborhood: "",
          borough: "",
          rating: 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (event): void => {
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

  const handleReviewPopUpClick = (): void => {
    reviewSeen === false ? setReviewSeen(true) : setReviewSeen(false);
  };
  const handleUpdatePopUpClick = (): void => {
    updateSeen === false ? setUpdateSeen(true) : setUpdateSeen(false);
  };

  const handleNeighborhoodClick = (event): void => {
    let neighborhoodReviews = reviews;
    neighborhoodReviews = neighborhoodReviews.filter(
      (review) => review.neighborhood == event.target.id
    );
    setReviewsForNeighbohood(
      reviewsForNeighborhood.concat(neighborhoodReviews)
    );
  };

  //handlers for dropdown filters
  const handleBurritoTypeDropdownChange = (event): void => {
    setBurritoTypeDropdownItem(event.target.value);
  };

  const handleNeighborhoodTypeDropdownChange = (event): void => {
    setNeighborhoodTypeDropdownItem(event.target.value);
  };

  //handlers for different fields in burrito submission fields
  const handleBurritoTypeChange = (event): void => {
    console.log("this is the new burrito", event.target.value);
    let updatedReviewList = newReview;
    updatedReviewList["burrito_type"] = event.target.value;
    setNewReview(updatedReviewList);
  };

  const handleRestaurantNameChange = (event): void => {
    let updatedReviewList = newReview;
    updatedReviewList.restaurant_name = event.target.value;
    setNewReview(updatedReviewList);
  };

  const handleNeighborhoodChange = (event): void => {
    let updatedReviewList = newReview;
    updatedReviewList.neighborhood = event.target.value;
    setNewReview(updatedReviewList);
  };

  const handleBoroughChange = (event): void => {
    let updatedReviewList = newReview;
    updatedReviewList.borough = event.target.value;
    setNewReview(updatedReviewList);
  };

  const handlePriceChange = (event): void => {
    let updatedReviewList = newReview;
    updatedReviewList.price = event.target.value;
    setNewReview(updatedReviewList);
  };

  const handleRatingChange = (event): void => {
    let updatedReviewList = newReview;
    updatedReviewList.rating = event.target.value;
    setNewReview(updatedReviewList);
  };

  const googleLogin = () => {
    fetch("/google", {
      method: "GET",
      headers: {
        "Content-Type": "Application/JSON",
      },
    });
  };

  return (
    <>
      <React.Fragment>
        <Nav
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          currentUser={currentUser}
          googleLogin={googleLogin}
          failedLogin={failedLogin}
        />
        <MainText />
        <ReviewButton
          reviewSeen={reviewSeen}
          handleReviewPopUpClick={handleReviewPopUpClick}
          handleBurritoTypeChange={handleBurritoTypeChange}
          handleRatingChange={handleRatingChange}
          handleRestaurantNameChange={handleRestaurantNameChange}
          handlePriceChange={handlePriceChange}
          handleNeighborhoodChange={handleNeighborhoodChange}
          handleBoroughChange={handleBoroughChange}
          handleFormSubmit={handleFormSubmit}
          newReview={newReview}
        />
        <div className='dropdown-menus'>
          <BurritoTypeDropdown
            reviews={reviews}
            handleBurritoTypeDropdownChange={handleBurritoTypeDropdownChange}
            burritoTypeDropdownItem={burritoTypeDropdownItem}
            neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
          />
          {/* <BurritoTypeDropdown/> */}
          <NeighborhoodTypeDropdown
            reviews={reviews}
            handleNeighborhoodTypeDropdownChange={
              handleNeighborhoodTypeDropdownChange
            }
            neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
            burritoTypeDropdownItem={burritoTypeDropdownItem}
          />
        </div>
      </React.Fragment>
      <Top10CardList
        handleDelete={handleDelete}
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleRatingChange={handleRatingChange}
        handleFormSubmit={handleFormSubmit}
        handleBurritoTypeChange={handleBurritoTypeChange}
        handleBurritoTypeDropdownChange={handleBurritoTypeDropdownChange}
        handleNeighborhoodTypeDropdownChange={
          handleNeighborhoodTypeDropdownChange
        }
        handleRestaurantNameChange={handleRestaurantNameChange}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handlePriceChange={handlePriceChange}
        reviews={reviews}
        handlePopUpClick={handlePriceChange}
      />
      <p className='homepageCarouselHeader'>All Reviews</p>
      <Carousel
        handleDelete={handleDelete}
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleRatingChange={handleRatingChange}
        handleFormSubmit={handleFormSubmit}
        handleBurritoTypeChange={handleBurritoTypeChange}
        handleRestaurantNameChange={handleRestaurantNameChange}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handlePriceChange={handlePriceChange}
        reviews={reviews}
        handlePopUpClick={handlePriceChange}
      />
      <FeedContainer
        handleDelete={handleDelete}
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleRatingChange={handleRatingChange}
        handleFormSubmit={handleFormSubmit}
        handleBurritoTypeChange={handleBurritoTypeChange}
        handleBurritoTypeDropdownChange={handleBurritoTypeDropdownChange}
        handleNeighborhoodTypeDropdownChange={
          handleNeighborhoodTypeDropdownChange
        }
        handleRestaurantNameChange={handleRestaurantNameChange}
        handleNeighborhoodChange={handleNeighborhoodChange}
        handlePriceChange={handlePriceChange}
        reviews={reviews}
        handlePopUpClick={handlePriceChange}
      />
    </>
  );
};

export default App;
