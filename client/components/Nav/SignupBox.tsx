import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../../reduxHooks";

import { signUp, login } from "../../slices/UsersSlice";

const SignupBox = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("username");
  const [password, setPassword] = useState<string>("password");
  const [clicked, setClick] = useState<boolean>(false);
  const [closed, setClose] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { isLoggedIn, failedLogin } = useAppSelector((state) => state.users);

  return (
    <React.Fragment>
      <div className='loginForm'>
        <form>
          <p className='signUpText'> 🌯 Sign up 🌯</p>
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
            className='signUpButton'
            onClick={() => {
              let credentials = {
                username: userName,
                password: password,
              };
              dispatch(credentials);
            }}
          />
        </form>
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
