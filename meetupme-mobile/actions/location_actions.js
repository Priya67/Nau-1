import axios from 'axios';

exports.searchLocations = (product_name, radius) => {
  return function(dispatch) {
      return axios.get(`https://api.goodzer.com/products/v0.1/search_locations/?query=${product_name}&lat=37.799238&lng=-122.402038&radius=${radius}&apiKey=125cbddf3880cb1ba652a7c269ba1eb0`).then((response) => {
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
