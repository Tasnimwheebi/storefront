import superagent from 'superagent';
const initialState = {
    products: [],
  };
  const productReducer = (state = initialState,action) => {
    let {type,payload} = action;
    switch (type) {
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
 export const productAction = payload => {
     return {
         type: 'DISPLAY',
         payload,
         
     }
 }
  export default productReducer;