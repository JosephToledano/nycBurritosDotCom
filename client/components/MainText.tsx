import React from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";

const MainText = ({}): JSX.Element => {
  const user = useAppSelector((state) => state.users.currentUser);
  return (
    <div className='main-text'>
      <h2>NYC Burritos</h2>
      <h4>A crowdsourced list of the best burritos in nyc</h4>
      <h6>Submit a review to rate a burrito</h6>
      <h4>Hello {user}</h4>
    </div>
  );
};

export default MainText;
