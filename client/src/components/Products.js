import React from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../actions/productActions.js'

class Products extends React.Component{
  render(){
    return(
      <div>
        this is products page
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return({
    products: state.products.products
  })
}
export default connect(mapStateToProps,{fetchProduct})(Products)
