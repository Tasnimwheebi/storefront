const initialState = {
    cartArray:[],
    totalProducts:0,
}
const reducerOfCart = (state = initialState,action) => {
    let {type,payload} = action;
    let cartArray = [...state.cartArray];
    switch (type) {
        case 'ADDTOCART':
            if(!cartArray.includes(payload.name))
            cartArray.push(payload.name);
            return{...state,cartArray,totalProducts:cartArray.length};
        case 'DELETE':
        cartArray = cartArray.filter((item) =>item !== payload);
        return {...state,cartArray,totalProducts:cartArray.length};
        default:
            return state;
    }
}
export const add = (payload) => {
    return {
      type:'ADDTOCART',
      payload,
    }
  }
  export const remove = (payload) => {
    return {
      type:'DELETE',
      payload,
    }
  }
export default reducerOfCart;