import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
const SignupBox = ({ handleSignUp, handleLogin, signUpClicked } = props) => {
  const [userName, setUserName] = useState("username");
  const [password, setPassword] = useState("password");
  const [clicked, setClick] = useState(false);
  const [closed, setClose] = useState(false);

  return (
    <React.Fragment>
      <div className="LoginForm">
        <div className="loginForm">
          <p className="loginHereText">Sign up</p>
          <label>
            <input
              type="text"
              className="loginInput"
              value={userName}
              onChange={(e) => setUserName((userName = e.target.value))}
              placeholder="username"
            />
          </label>
          <label>
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword((password = e.target.value))}
            />
          </label>
          <input
            type="submit"
            className="submitButton"
            onClick={() => {
              handleSignUp(userName, password);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );

  // else {
  //   return (
  //     <>
  //       <React.Fragment>
  //         <h4
  //           className="loginText"
  //           onClick={(e) => {
  //             // signUpClicked(true);
  //             if (clicked === false) {
  //               setClick((clicked = true));
  //             } else {
  //               setClick((clicked = false));
  //               setClose((closed = false));
  //             }
  //           }}
  //         >
  //           Sign up
  //         </h4>
  //       </React.Fragment>
  //     </>
  //   );
  // }
};

export default SignupBox;
