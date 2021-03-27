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
import { useSelector, useDispatch } from "react-redux";
import { submitNewReview, fetchReviews } from "./slices/ReviewsSlice";
import { login, signUp } from "./slices/UsersSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

//Types and interfaces used
interface newReview {
  currentUserId?: number;
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

  const dispatch = useDispatch();

  // let reviews = useAppSelector((state) => state.reviews.reviews);
  let reviews = useAppSelector((state) => state.reviews.reviews);
  let currentUser = useAppSelector((state) => state.users.currentUser);
  let isLoggedIn = useAppSelector((state) => state.users.isLoggedIn);
  let currentUserId = useAppSelector((state) => state.users.currentUserId);
  let failedLogin = useAppSelector((state) => state.users.failedLogin);

  React.useEffect((): void => {
    console.log(reviews);
    dispatch(fetchReviews());
    console.log("these are the reviews", reviews);
  }, [reviews]);

  // let reviews = useAppSelector((state) => state.reviews.reviews);

  // event handler for when user hits log in button
  const handleLogin = (username: string, password: string) => {
    let info = { username: username, password: password };
    dispatch(login(info));
  };

  const handleFormSubmit = (e, newReview: newReview): void => {
    e.preventDefault();
    if (currentUserId === -1) {
      alert("Please login to submit a review");
      return;
    }
    let newReviewObj = newReview;
    newReviewObj.currentUserId = currentUserId;
    dispatch(submitNewReview(newReviewObj));
  };

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
          currentUser={currentUser}
          googleLogin={googleLogin}
          failedLogin={failedLogin}
        />
        <MainText />
        <ReviewButton
          reviewSeen={reviewSeen}
          handleReviewPopUpClick={handleReviewPopUpClick}
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
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
        handleBurritoTypeDropdownChange={handleBurritoTypeDropdownChange}
        handleNeighborhoodTypeDropdownChange={
          handleNeighborhoodTypeDropdownChange
        }
        reviews={reviews}
        handlePopUpClick={handlePriceChange}
      />
      <p className='homepageCarouselHeader'>All Reviews</p>
      <Carousel
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
        reviews={reviews}
        handlePopUpClick={handlePopUpClick}
      />
      <FeedContainer
        reviewsForNeighborhood={reviewsForNeighborhood}
        burritoTypeDropdownItem={burritoTypeDropdownItem}
        neighborhoodTypeDropdownItem={neighborhoodTypeDropdownItem}
        handleNeighborhoodClick={handleNeighborhoodClick}
        handleUpdatePopUpClick={handleUpdatePopUpClick}
        updateSeen={updateSeen}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
        handleBurritoTypeDropdownChange={handleBurritoTypeDropdownChange}
        handleNeighborhoodTypeDropdownChange={
          handleNeighborhoodTypeDropdownChange
        }
        reviews={reviews}
        handlePopUpClick={handlePriceChange}
      />
    </>
  );
};

export default App;
