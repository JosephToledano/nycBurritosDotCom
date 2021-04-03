import * as React from "react";
// import "./index.css";
import SearchBar from "./components/Search/SearchBar";
import BoroughFilters from "./components/Search/BoroughFilters";
import MainText from "./components/MainText";
import Nav from "./components/Nav/Nav";
import ReviewButton from "./components/ReviewButton";
import BurritoTypeDropdown from "./components/dropdown-filters/Main/BurritoTypeDropdown";
import NeighborhoodTypeDropdown from "./components/dropdown-filters/Main/NeighborhoodTypeDropdown";
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
  const [
    burritoTypeDropdownItem,
    setBurritoTypeDropdownItem,
  ] = React.useState<string>(null);
  const [
    neighborhoodTypeDropdownItem,
    setNeighborhoodTypeDropdownItem,
  ] = React.useState<string>(null);

  const dispatch = useDispatch();
  // setTimeout(() => dispatch(fetchReviews()), 10);

  // let reviews = useAppSelector((state) => state.reviews.reviews);
  let reviews = useAppSelector((state) => state.reviews.reviews);
  let newReviewz = useAppSelector((state) => state.reviews.newReview);

  let currentUser = useAppSelector((state) => state.users.currentUser);
  let isLoggedIn = useAppSelector((state) => state.users.isLoggedIn);
  let currentUserId = useAppSelector((state) => state.users.currentUserId);
  let failedLogin = useAppSelector((state) => state.users.failedLogin);

  React.useEffect(() => {
    dispatch(fetchReviews());
  }, []);

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

  const handleNeighborhoodClick = (event): void => {
    let neighborhoodReviews = reviews;
    neighborhoodReviews = neighborhoodReviews.filter(
      (review) => review.neighborhood == event.target.id
    );
    setReviewsForNeighbohood(
      reviewsForNeighborhood.concat(neighborhoodReviews)
    );
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
      <>
        <div className='image-parallax'>
          <Nav
            currentUser={currentUser}
            googleLogin={googleLogin}
            failedLogin={failedLogin}
          />
          <ReviewButton
            reviewSeen={reviewSeen}
            handleReviewPopUpClick={handleReviewPopUpClick}
            handleFormSubmit={handleFormSubmit}
            newReview={newReview}
          />
          <div id='top-container'>
            <MainText />
            <SearchBar />
          </div>
        </div>
        <div id='top-mid-banner'>
          <p id='top-mid-banner-text'>
            {" "}
            Fun fact: it is more likely for the Jets to win a game than it is
            for you to find a good burrito here
          </p>
        </div>
        <div className='image-parallax-2'>
          <div className='dropdown-menus'>
            <BurritoTypeDropdown />
            <NeighborhoodTypeDropdown />
          </div>

          <Top10CardList
            reviewsForNeighborhood={reviewsForNeighborhood}
            handleNeighborhoodClick={handleNeighborhoodClick}
            newReview={newReview}
            handleFormSubmit={handleFormSubmit}
            reviews={reviews}
          />
        </div>
      </>
      {/* <p className='homepageCarouselHeader'>All Reviews</p>
      {/* <Carousel
        reviewsForNeighborhood={reviewsForNeighborhood}
        handleNeighborhoodClick={handleNeighborhoodClick}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
        reviews={reviews}
      /> */}
      <div id='bottom-banner'>
        <p id='bottom-banner-text'>
          {" "}
          Want to add a review? All you need to do is sign up and click the
          submit a review button
        </p>
      </div>

      <FeedContainer
        reviewsForNeighborhood={reviewsForNeighborhood}
        handleNeighborhoodClick={handleNeighborhoodClick}
        newReview={newReview}
        handleFormSubmit={handleFormSubmit}
        reviews={reviews}
      />
    </>
  );
};

export default App;
