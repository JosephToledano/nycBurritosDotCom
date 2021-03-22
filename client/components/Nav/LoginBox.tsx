import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import SignupBox from "./SignupBox";
import { useSelector, useDispatch } from "react-redux";
import login from "../../slices/Users";
const LoginBox = ({
  handleSignUp,
  handleLogin,
  googleLogin,
  failedLogin,
  loginClicked,
}): JSX.Element => {
  const [userName, setUserName] = useState<string>("username");
  const [password, setPassword] = useState<string>("password");
  const [showingSignUp, setSignUpVisible] = useState<boolean>(false);
  const [clicked, setClick] = useState<boolean>(false);
  const [closed, setClose] = useState<boolean>(false);

  const dispatch = useDispatch();

  if (
    clicked &&
    closed === false &&
    showingSignUp === false &&
    failedLogin === false
  ) {
    return (
      <React.Fragment>
        <div className='loginForm'>
          <div
            id='close'
            onClick={(e) => {
              console.log(closed);
              closed === false ? setClose(true) : setClose(false);
            }}
          >
            <p className='signUpText'>X</p>
          </div>
          <p className='signUpText'> 🌯 Log in 🌯 </p>
          <p
            className='signUpTextBox'
            onClick={() => {
              console.log(showingSignUp);
              setSignUpVisible(true);
            }}
          >
            Don't have an account yet? Sign up here!
          </p>

          <label>
            <input
              type='text'
              className='loginInput'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='username'
            />
          </label>
          <label>
            <input
              type='password'
              className='loginInput'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input
            type='submit'
            className='loginButton'
            onClick={() => dispatch(login(userName, password))}
          />
        </div>
      </React.Fragment>
    );
  }
  if (
    clicked &&
    closed === false &&
    showingSignUp === false &&
    failedLogin === true
  ) {
    return (
      <React.Fragment>
        <div className='loginForm'>
          <div
            id='close'
            onClick={(e) => {
              console.log(closed);
              closed === false ? setClose(true) : setClose(false);
            }}
          >
            <p className='signUpText'>X</p>
          </div>
          <p className='signUpText'> 🌯 Log in 🌯</p>
          <p
            className='signUpTextBox'
            onClick={(e) => {
              console.log(showingSignUp);
              setSignUpVisible(true);
            }}
          >
            Don't have an account yet? <br />
            Sign up here!
          </p>
          <p className='signUpTextFail'>
            Please try again with the correct login info.
          </p>
          <label>
            <input
              type='text'
              className='loginInput'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='username'
            />
          </label>
          <label>
            <input
              type='password'
              className='loginInput'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input
            type='submit'
            className='loginButton'
            onClick={() => dispatch(login(userName, password))}
          />
        </div>
      </React.Fragment>
    );
  } else if (showingSignUp === true) {
    return (
      <React.Fragment>
        <div
          id='close'
          onClick={(e) => {
            showingSignUp === true
              ? setSignUpVisible(false)
              : setSignUpVisible(true);
          }}
        >
          <p className='loginText'>X</p>
        </div>
        <div className='login'>
          <SignupBox handleSignUp={handleSignUp} />;
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <>
        <React.Fragment>
          <h4
            className='loginHere'
            onClick={(e) => {
              if (clicked === false) {
                setClick(true);
              } else {
                setClick(false);
                setClose(false);
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
