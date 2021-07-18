import superagent from 'superagent';

const initialState = {
    products: [],
    specificProduct :[{category: "electronics",
    inStock: 1824,
    name: "TV",
    price: 698}],
  };
  const productReducer = (state = initialState,action) => {
    let {type,payload} = action;
    switch (type) {
      case 'SPECIFIC':
         console.log('//////////////////////',payload.results);
         console.log('state /*******',state);
      //  return payload.resultss;
      let newState = {...state,specificProduct:payload.results}
      console.log('NeewState ', newState);
      return  newState;
      case 'DISPLAY':
        let products = payload.results;
        
            return {products}; 
     ;
    
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

 export const getDetails = (_id) => (dispatch, state) => {
   console.log('_id ********',_id);
  const api = `https://api-js401.herokuapp.com/api/v1/products?_id=${_id}`;
  
     return superagent.get(api).then(res => {
      // console.log('response ', res.body);
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