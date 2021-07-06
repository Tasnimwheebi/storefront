import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categories';
import productReducer from './products';
import reducerOfCart from './cart'
let reducers = combineReducers({ categoryReducer,productReducer,reducerOfCart });
const store = () => {
  return createStore(reducers, composeWithDevTools());
};
export default store();