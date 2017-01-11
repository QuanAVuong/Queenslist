import { combineReducers } from 'redux';
import adReducer from './adReducer';


// combines reducers for store

const rootReducer = combineReducers({
  ads: adReducer,

});

export default rootReducer;
