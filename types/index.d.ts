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
//PROPS
interface NavProps {
  handleLogin: handleLogin;
  handleSignUp: handleSignUp;
  currentUser: currentUser;
  failedLogin: failedLogin;
}

interface LoginProps {
  handleLogin: handleLogin;
  handleSignUp: handleSignUp;
  currentUser: currentUser;
  failedLogin: failedLogin;
  googleLogin: googleLogin;
}

interface ReviewCardProps {
  rating: number;
  restaurant_image_url: string;
  restaurant_name: string;
  price: number;
  neighborhood: string;
  borough: string;
  handleRestaurantNameChange: handleRestaurantNameChange;
  handleNeighborhoodChange: handleNeighborhoodChange;
  handleRatingChange: handleRatingChange;
  reviewsForNeighborhood: reviewsForNeighborhood;
  handleDelete: handleDelete;
  handleUpdatePopUpClick: handleUpdatePopUpClick;
  burrito_type: string;
  handleNeighborhoodClick: handleNeighborhoodClick;
  handleBurritoTypeChange: handleBurritoTypeChange;
  updateSeen: updateSeen;
  handlePriceChange: handlePriceChange;
  handleFormSubmit: handleFormSubmit;
  handlePopUpClick: handlePopUpClick;
  newReview: newReview;
  id: number;
}

//HANDLERS
type handleLogin = (username: string, password: string) => void;

type handleSignUp = (username: string, password: string) => void;

type handleFormSubmit = (event: Event, newReview: newReview) => void;

type handleDelete = (event: Event) => void;

type handleReviewPopUpClick = () => void;

type handlePopUpClick = (event: Event) => void;

type handleUpdatePopUpClick = () => void;

type handleNeighborhoodClick = (event: Event) => void;

type handleBurritoTypeDropdownChange = (event: Event) => void;

type handleNeighborhoodTypeDropdownChange = (event: Event) => void;

type handleRestaurantNameChange = (event: Event) => void;

type handleNeighborhoodChange = (event: Event) => void;

type handleBurritoTypeChange = (event: Event) => void;

type handlePriceChange = (event: Event) => void;

type handleRatingChange = (event: Event) => void;

type googleLogin = (event: Event) => void;
