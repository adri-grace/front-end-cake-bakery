import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from './Main.js'
import Form from './Form.js'
import SignIn from './SignIn'
import Products from './Products.js'



class Routers extends React.Component{
  render(){
    return(
      <Router>

        <div>

          <Route path='/' exact component={Main}/>
          <Route path='/sign-in'component={SignIn}/>
          <Route path='/products' component={Products}/>

          <Route path='/home/form' exact component={Form}/>
        </div>
      </Router>

    )
  }
}

export default Routers
