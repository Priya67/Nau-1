import axios from 'axios';

exports.searchLocations = (product_name, radius) => {
  return function(dispatch) {
    return axios.get(`https://api.goodzer.com/products/v0.1/search_locations/?query=${product_name}&lat=37.799238&lng=-122.402038&radius=${radius}&apiKey=69e56b7af76741f7414285047d3c1cc2`).then((response) => {
      dispatch(storeLocations(response.data.locations));
    }).catch ((e) => {
      console.log(e);
    });
  };
};

exports.searchProducts = (product_name, storeId) => {
  return function(dispatch) {
    return axios.get(`https://api.goodzer.com/products/v0.1/search_in_store/?storeId=${storeId}&query=${product_name}&apiKey=69e56b7af76741f7414285047d3c1cc2`).then((response) => {
      console.log("api response", response.data);
      if (response.data.status !== "error") {
        dispatch(storeProducts(response.data.products));
      }
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

var storeProducts = (products) => {
  return {
    type: 'RECEIVE_ALL_PRODUCTS',
    products
  };
};
