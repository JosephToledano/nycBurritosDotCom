import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox.js";
import { useSelector, useDispatch } from "react-redux";

const Nav = ({ currentUser, googleLogin, failedLogin }): JSX.Element => {
  const [loginClicked, setLoginClick] = useState<boolean>(false);
  const [signUpClicked, setSignUpClick] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    if (currentUser.length >= 0) {
      fetch("/logout");
      // .then(() => dispatch())
    }
  };

  // const loggedinUser = useSelector((state: any) => state.users.currentUser);
  if (
    // loggedinUser.length === 0 &&
    loginClicked === false &&
    signUpClicked === false &&
    currentUser.length <= 0
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
  } else if (currentUser && currentUser.length > 0) {
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

            <button onClick={handleLogout}>Log out</button>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
