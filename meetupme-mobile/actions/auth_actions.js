import axios from 'axios';

exports.loginUser = (email, password) => {
  return function(dispatch) {
    return axios.post('http://localhost:3000/api/signin', {email, password}).then((response) => {
      dispatch(authUser(response.data.token));
    }).catch((error) => {
      console.log(error);
    });
  };
};

exports.signupUser = (email, password) => {
  return function(dispatch) {
    return axios.post('http://localhost:3000/api/signup', {email, password}).then((response) => {
      dispatch(authUser(response.data.token));
    }).catch((error) => {
      console.log("Could not sign up.");
    });
  };
};

exports.signoutUser = () => {
  return function(dispatch){
    dispatch(unauthUser());
  };
};

var authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  };
};

var unauthUser = () => {
  return {
    type: 'UNAUTH_USER'
  };
};
