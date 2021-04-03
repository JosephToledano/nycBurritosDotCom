import React from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";

const MainText = ({}): JSX.Element => {
  const user = useAppSelector((state) => state.users.currentUser);
  return (
    <div className='main-text'>
      <h2>NYC Burritos</h2>
      <div id='secondary-main-text'>
        <h4>A crowdsourced list of the best burritos in nyc</h4>
        <h6
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Submit a review to rate a burrito
        </h6>
      </div>
    </div>
  );
};

export default MainText;
