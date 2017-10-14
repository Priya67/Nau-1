const defaultState = [];

const locationReducer = (state = defaultState, action) => {
  // console.log(action);
  switch(action.type) {
    case 'RECEIVE_ALL_LOCATIONS':
      return action.locations;
    case 'RECEIVE_ALL_PRODUCTS':
      //console.log('ACTION.PROD',action.products);
      return action.products;
    default:
      return defaultState;
  }
};

export default locationReducer;
