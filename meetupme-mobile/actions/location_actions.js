import axios from 'axios';

exports.searchLocations = (product_name, req, res) => {
  console.log("I am in action");
  return function(dispatch) {
    console.log("action 2");
      return axios.get('https://api.goodzer.com/products/v0.1/search_locations/?query=v-neck+sweater&lat=37.799238&lng=-122.402038&radius=5.0&apiKey=125cbddf3880cb1ba652a7c269ba1eb0').then((response) => {
        //console.log("000000000", response);
        dispatch(storeLocations(response.data.locations));
        console.log("fetched locations");
        //console.log(response.data.locations);
        //console.log("****", response);
        //console.log(response.status);
      }).catch ((e) => {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup'});
  });
};
};

var storeLocations = (locations) => {
  type: 'RECEIVE_ALL_LOCATIONS',
  locations;
};
