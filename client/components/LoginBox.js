import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
const LoginBox = ({ handleSignUp, handleLogin } = props) => {
  const [userName, setUserName] = useState("username");
  const [password, setPassword] = useState("password");
  const [clicked, setClick] = useState(false);
  const [closed, setClose] = useState(false);

  if (clicked && closed === false) {
    return (
      <React.Fragment>
        <div
          className="close"
          onClick={(e) => {
            closed === false
              ? setClose((closed = true))
              : setClose((closed = false));
          }}
        >
          X
        </div>
        <div className="LoginForm">
          <div className="loginForm">
            <p className="loginHere">Login Here</p>
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
  } else {
    return (
      <>
        <React.Fragment>
          <h4
            onClick={(e) => {
              if (clicked === false) {
                setClick((clicked = true));
              } else {
                setClick((clicked = false));
                setClose((closed = false));
              }
            }}
          >
            Login here
          </h4>
        </React.Fragment>
      </>
    );
  }
};

export default LoginBox;
