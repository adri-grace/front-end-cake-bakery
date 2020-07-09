import React from 'react'
import { Link } from "react-router-dom";
class Main extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <Link to='/'><p>Home</p></Link>
          <Link to='/products'><p>Bakery</p></Link>
          <Link to='/home/form'><p>Order Form</p></Link>
          <Link to='/sign-in'><p>Sign In</p></Link>
        </nav>
        <div>
          <h3>Cakes Treats & Crafts</h3>
          <h4>Add a little bit of sweetness to your life</h4>
          <p>Hi, There! My love of baking started...</p>
        </div>

      </div>
    )
  }
}

export default Main
