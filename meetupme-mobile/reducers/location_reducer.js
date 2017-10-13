const defaultState = {};

const locationReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'RECEIVE_ALL_LOCATIONS':

      return {
        locations: action.data.locations
      };
      default:
        return defaultState;
  }
};

export default locationReducer;
