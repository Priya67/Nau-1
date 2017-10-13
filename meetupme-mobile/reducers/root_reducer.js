import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import locationReducer from './location_reducer';

const RootReducer = combineReducers({
  auth: authReducer,
  locations: locationReducer
});

export default RootReducer;
