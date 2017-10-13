import axios from 'axios';

exports.searchLocations = (product_name, req, res) => {
  console.log("I am in action");
  return function(dispatch) {
    console.log("action 2");
      return axios.get('https://api.goodzer.com/products/v0.1/search_locations/?query=v-neck+sweater&lat=40.714353&lng=-74.005973&radius=5.0&priceRange=30:120&apiKey=125cbddf3880cb1ba652a7c269ba1eb0').then((response) => {
        console.log("000000000", response);
        dispatch(storeLocations(response.data.locations));
        console.log("fetched locations");
        console.log("****", response);
      }).catch ((e) => {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup'});
  });
};
};

var storeLocations = (locations) => {
  type: 'RECEIVE_ALL_LOCATIONS',
  locations;
};
