import axios from 'axios';

exports.searchLocations = (product_name) => {
  return function(dispatch) {
      return axios.get('https://api.goodzer.com/products/v0.1/search_locations/?query=v-neck+sweater&lat=37.799238&lng=-122.402038&radius=5.0&apiKey=125cbddf3880cb1ba652a7c269ba1eb0').then((response) => {
        console.log("000000000", response.data);
        dispatch(storeLocations(response.data.locations));
      }).catch ((e) => {
        console.log(e);
  });
};
};

var storeLocations = (locations) => {
  return {
    type: 'RECEIVE_ALL_LOCATIONS',
    locations
  };
};
