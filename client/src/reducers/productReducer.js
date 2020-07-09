import { FETCH_PRODUCT } from '../actions/types.js'
const initialState = {
  products:[]
}

const productReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PRODUCT:
    return({
      ...state,
      products: action.payload
    })
    default:
    return state
  }


}
export default productReducer
