import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import SignupBox from "./SignupBox";
const LoginBox = ({ handleSignUp, handleLogin, googleLogin } = props) => {
  const [userName, setUserName] = useState("username");
  const [password, setPassword] = useState("password");
  const [showingSignUp, setSignUpVisible] = useState(false);
  const [clicked, setClick] = useState(false);
  const [closed, setClose] = useState(false);

  if (clicked && closed === false && showingSignUp === false) {
    return (
      <React.Fragment>
        <div className="loginBox">
          <div className="loginForm">
            <div
              id="close"
              onClick={(e) => {
                closed === false
                  ? setClose((closed = true))
                  : setClose((closed = false));
              }}
            >
              X
            </div>
            <p className="loginText">Login Here</p>
            <p
              className="signUpText"
              onClick={(e) => setSignUpVisible((showingSignUp = true))}
            >
              Don't have an account yet? Sign up here!
            </p>

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
              onClick={() => handleLogin(userName, password)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  } else if (showingSignUp === true) {
    return (
      <React.Fragment>
        <div
          id="close"
          onClick={(e) => {
            showingSignUp === false
              ? setSignUpVisible((showingSignUp = true))
              : setSignUpVisible((showingSignUp = false));
          }}
        >
          X
        </div>
        <SignupBox handleSignUp={handleSignUp} />;
      </React.Fragment>
    );
  } else {
    return (
      <>
        <React.Fragment>
          <h4
            className="loginHere"
            onClick={(e) => {
              if (clicked === false) {
                setClick((clicked = true));
              } else {
                setClick((clicked = false));
                setClose((closed = false));
              }
            }}
          >
            Login
          </h4>
        </React.Fragment>
      </>
    );
  }
};

export default LoginBox;
