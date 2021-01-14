import React from 'react'
import { Link } from 'react-router-dom';
// import ReviewCard from './components/ReviewCard'
// import ReviewCardList from './components/ReviewCardList'
// import ReviewCardBox from './components/ReviewCardBox'

export const Restaurants = (props) => {
    console.log('this is the props on Restaurants', props)
    return (
     <div className = 'restaurantPage'>
        <div className="NavBar">
          <div className="main-header"> 
            <img id= "main-logo" src="https://cdn4.iconfinder.com/data/icons/fast-food-menu-1/64/147_fast-food-menu-roll-burrito-512.png"/>
          </div>
    
            <Link to={'/'}>
                <h3 className ="NavLink">
                    Home 
                </h3>
            </Link>

            <Link to={'/About'}>
                <h3 className ="NavLink">
                    About
                </h3>
            </Link>
            <Link to={'/Blog'}>
                <h3 className ="NavLink">
                    Blog
                </h3>
            </Link>
    </div>
        
      <div className="restaurantSection">
            <div className = 'restaurantSection'>
                <h2 className = 'restaurantHeader'>Burrito Reviews for  </h2>

            </div>
           
        </div>
      </div>
    )
}

export default Restaurants