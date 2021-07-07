import superagent from 'superagent';
const initialState = {
    products: [],
    specificProduct :[],
  };
  const productReducer = (state = initialState,action) => {
    let {type,payload} = action;
    switch (type) {
      case 'DISPLAY':
        let products = payload.results;
        
            return {products}; 
     ;
     case 'SPECIFIC':
       console.log('//////////////////////',payload);
     return payload;
      default:
        return state;
    }
}
export const getData = (name) => (dispatch, state) => {
  const api = `https://api-js401.herokuapp.com/api/v1/products?category=${name}`;
     return superagent.get(api).then(res => {
         dispatch(productAction(res.body));
     });
 }

 export const getDetails = (name,_id) => (dispatch, state) => {
  const api = `https://api-js401.herokuapp.com/api/v1/products?category=${name}$_id=${_id}`;
     return superagent.get(api).then(res => {
         dispatch(producDetails(res.body));
     });
 }
 export const producDetails = payload => {
  return {
      type: 'SPECIFIC',
      payload,
      
  }
}
 export const productAction = payload => {
     return {
         type: 'DISPLAY',
         payload,
         
     }
 }
  export default productReducer;