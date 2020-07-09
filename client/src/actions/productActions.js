import { FETCH_PRODUCT } from './types.js'

export const fetchProduct = () => {
  return(
    (dispatch) => {
      (async()=>{
        try{
          let response  = await fetch('#')
          let data = await response.json()
          console.log(data);
          dispatch({
            type: FETCH_PRODUCT,
            payload: data
          })
        }catch(e){
          console.log(e);
        }
      })()
    }
  )
}
