import merge from 'lodash/merge';
const defaultState = [];

const locationReducer = (state = defaultState, action) => {
  console.log("I am in reducer", action);
  switch(action.type) {
    case 'RECEIVE_ALL_LOCATIONS':
      return merge({}, state, {"locations": action.locations});

    case 'RECEIVE_ALL_PRODUCTS':
      console.log("state", state);
      console.log("action", action);
      return merge({}, state, {"products": action.products});
    default:
      return defaultState;
  }
};

export default locationReducer;
