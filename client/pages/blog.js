import React from 'react'
import { Link } from 'react-router-dom';

export const Blog = (props) => {

    return (
        <div className ="blogPage">
        <nav className="NavBar">
        <div className="main-header"> 
        <Link to={'/'}>
                      <h3 className ="NavLink">
                          Home 
                      </h3>
              </Link> 
              <Link to={'/'}>
        <img id= "main-logo" src="https://cdn4.iconfinder.com/data/icons/fast-food-menu-1/64/147_fast-food-menu-roll-burrito-512.png"/>
        </Link> 
          <div className ="headerLinks">
          <Link to={'./About'}>
          <h3 className ="NavLink">
              About 
          </h3>
        </Link>
        <Link to={'./Blog'}>
                  <h3 className ="NavLink">
                      Blog 
                  </h3>
        </Link>
        </div>
        </div>
      </nav>
        
      <div className="BlogSection">
            <div className = 'blogHeader'>
                <h2 className = 'blogHeaderText'>Let's Talk About Burritos!</h2>
            </div>
            <article className ="blogPost">
                <h6 className ="blogPostHeaderText" >Breakfast Burritos: Are they Wraps or Burritos? Let's find out</h6>
                <img className="blog-image" src="https://images.pexels.com/photos/5848079/pexels-photo-5848079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>

                <p id ="blogPostText">
                    A Sunday morning classic, breakfast burritos are the real MVP when it comes to recovering from a long night. 
                    A mix of eggs, your proteins of choice, and whatever else your heart desires, all wrapped in a lovely tortilla, they can also be made at home with relative ease.
                    However, are these Sunday saviors actually burrito pretenders? 

                    Let's try and wrap our head around this concept, what constitutes a burrito? 
                </p>
            </article>
        </div>
      </div>
    )
}

export default Blog