import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="NavBar">
      <div className="main-header">
        {/* <Link to={'/'}>
                    <h3 className ="NavLink">
                        Home 
                    </h3>
            </Link>       */}

        {/* <Link to={'/'}> */}
        <img
          id="main-logo"
          src="https://cdn4.iconfinder.com/data/icons/fast-food-menu-1/64/147_fast-food-menu-roll-burrito-512.png"
        />
        {/* </Link>   */}
        <div className="headerLinks">
          {/* <Link to={'./About'}> */}
          <h3 className="NavLink">About</h3>
          {/* </Link> */}
          {/* <Link to={'./Blog'}>
                <h3 className ="NavLink">
                    Blog 
                </h3>
      </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
