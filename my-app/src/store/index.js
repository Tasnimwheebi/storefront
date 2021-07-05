import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categories';
let reducers = combineReducers({ categoryReducer });
const store = () => {
  return createStore(reducers, composeWithDevTools());
};
export default store();