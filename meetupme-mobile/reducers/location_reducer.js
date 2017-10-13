const defaultState = [];

const locationReducer = (state = defaultState, action) => {
  console.log(action);
  switch(action.type) {
    case 'RECEIVE_ALL_LOCATIONS':
      return action.locations;
    default:
      return defaultState;
  }
};

export default locationReducer;
