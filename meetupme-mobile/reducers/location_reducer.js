import merge from 'lodash/merge';
const defaultState = [];

import { RECEIVE_LOCATION, CLEAR_LOCATIONS } from '../actions/location_actions';

const locationReducer = (state = defaultState, action) => {
  // console.log("I am in reducer", action);
  switch(action.type) {
    case RECEIVE_LOCATION:
      return [...state, action.location];
    case CLEAR_LOCATIONS:
      return [];
    default:
      return state;
  }
};

export default locationReducer;
