import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox.js";

const Nav = ({
  handleLogin,
  handleSignUp,
  currentUser,
  googleLogin,
  failedLogin,
}: NavProps): JSX.Element => {
  const [loginClicked, setLoginClick] = useState<loginClicked>(false);
  const [signUpClicked, setSignUpClick] = useState<signUpClicked>(false);

  if (
    currentUser.length === 0 &&
    loginClicked === false &&
    signUpClicked === false
  ) {
    return (
      <nav className='NavBar'>
        <div className='main-header'>
          <Link to={"/"}>
            <h3 className='NavLink'>Home</h3>
          </Link>
          <Link to={"./Blog"}>
            <h3 className='NavLink'>Blog</h3>
          </Link>

          <Link to={"/"}>
            <img
              id='main-logo'
              src='https://cdn4.iconfinder.com/data/icons/fast-food-menu-1/64/147_fast-food-menu-roll-burrito-512.png'
            />
          </Link>

          <Link to={"./About"}>
            <h3 className='NavLink'>About</h3>
          </Link>
          <div className='Login'>
            <LoginBox
              loginClicked={setLoginClick}
              handleSignUp={handleSignUp}
              handleLogin={handleLogin}
              googleLogin={googleLogin}
              failedLogin={failedLogin}
            />
          </div>

          {/* <Link to={"./Login"}>
            <h3 className="NavLink">Login</h3>
          </Link> */}

          {/* <div className="Signup">
              <SignupBox
                signUpClicked={setSignUpClick}
                handleSignUp={handleSignUp}
              />
            </div> */}
        </div>
      </nav>
    );
  } else if (currentUser.length > 0) {
    return (
      <nav className='NavBar'>
        <div className='main-header'>
          <Link to={"/"}>
            <h3 className='NavLink'>Home</h3>
          </Link>

          <Link to={"/"}>
            <img
              id='main-logo'
              src='https://cdn4.iconfinder.com/data/icons/fast-food-menu-1/64/147_fast-food-menu-roll-burrito-512.png'
            />
          </Link>
          <div className='headerLinks'>
            <Link to={"./About"}>
              <h3 className='NavLink'>About</h3>
            </Link>
            <Link to={"./Blog"}>
              <h3 className='NavLink'>Blog</h3>
            </Link>

            <p className='loggedInUser'>{currentUser}</p>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
