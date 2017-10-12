const defaultState = {
  user_id: undefined,
};

const authReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'AUTH_USER':
      return {
        user_id: action.user_id
      };

    case 'UNAUTH_USER':
      return {
        user_id: undefined
      };

    default:
      return state;
  }
};

export default authReducer;
