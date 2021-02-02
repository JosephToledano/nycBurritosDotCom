import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="aboutPage">
      <nav className="NavBar">
        <div className="main-header">
          <Link to={"/"}>
            <h3 className="NavLink">Home</h3>
          </Link>

          <Link to={"/"}>
            <img
              id="main-logo"
              src="https://cdn4.iconfinder.com/data/icons/fast-food-menu-1/64/147_fast-food-menu-roll-burrito-512.png"
            />
          </Link>

          <div className="headerLinks">
            <Link to={"./About"}>
              <h3 className="NavLink">About</h3>
            </Link>
            <Link to={"./Blog"}>
              <h3 className="NavLink">Blog</h3>
            </Link>
          </div>
        </div>
      </nav>

      <div className="AboutSection">
        <div className="aboutHeader">
          <h1 className="aboutHeaderText">Why?</h1>
        </div>
        <div className="aboutText">
          <p id="aboutText">
            Unfortunately it is damn near impossible to find a good burrito in
            NYC.{" "}
          </p>
          <p id="aboutText">
            {" "}
            While there are reviews and lists out there, too often they are
            either a bit dated or biased by sponsored posts.
          </p>
          <p id="aboutText">
            This site is here to help people stay up to date with the best
            burritos in NYC, brought to you by fellow burrito enthusiasts like
            yourself.
          </p>
          <br></br>
          <br></br>
          <br></br>

          <p id="aboutText">
            If you have any questions at all please reach out to us
            support@nycburritos.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
