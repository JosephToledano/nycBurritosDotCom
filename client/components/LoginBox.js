import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import SignupBox from "./SignupBox";
const LoginBox = ({ handleSignUp, handleLogin, googleLogin, failedLogin } = props) => {
  const [userName, setUserName] = useState("username");
  const [password, setPassword] = useState("password");
  const [showingSignUp, setSignUpVisible] = useState(false);
  const [clicked, setClick] = useState(false);
  const [closed, setClose] = useState(false);

  if (clicked && closed === false && showingSignUp === false && failedLogin === false) {
    return (
      <React.Fragment>
          <div className="loginForm">
            <div
              id="close"
              onClick={(e) => {
                closed === false
                  ? setClose((closed = true))
                  : setClose((closed = false));
              }}
            >
              <p className="signUpText">X</p>
            </div>
            <p className="signUpText"> 🌯 Log in 🌯</p>
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
              className="loginButton"
              onClick={() => handleLogin(userName, password)}
            />
          </div>
     </React.Fragment>
    );
  } if (clicked && closed === false && showingSignUp === false && failedLogin === true) {
    return (
      <React.Fragment>
          <div className="loginForm">
            <div
              id="close"
              onClick={(e) => {
                closed === false
                  ? setClose((closed = true))
                  : setClose((closed = false));
              }}
            >
              <p className="signUpText">X</p>
            </div>
            <p className="signUpText"> 🌯 Log in 🌯</p>
            <p
              className="signUpText"
              onClick={(e) => setSignUpVisible((showingSignUp = true))}
            >
              Don't have an account yet? <br/>
              Sign up here!
            </p>
              <p className="signUpTextFail">
                Please try again with the correct login info.
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
              className="loginButton"
              onClick={() => handleLogin(userName, password)}
            />
          </div>
      </React.Fragment>
    );
  }
  else if (showingSignUp === true) {
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
          <p className="loginText">X</p>
        </div>
        <div className="login">
        <SignupBox handleSignUp={handleSignUp} />;
        </div>
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
