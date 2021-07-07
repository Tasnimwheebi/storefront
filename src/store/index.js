import { createStore, combineReducers , applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categoryReducer from './categories';
import productReducer from './products';
import reducerOfCart from './cart'
let reducers = combineReducers({ categoryReducer,productReducer,reducerOfCart });
const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};
export default store();