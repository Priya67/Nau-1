import axios from 'axios';

exports.searchLocations = (product_name, radius) => {
  return function(dispatch) {
    return axios.get(`https://api.goodzer.com/products/v0.1/search_locations/?query=${product_name}&lat=37.799238&lng=-122.402038&radius=${radius}&apiKey=125cbddf3880cb1ba652a7c269ba1eb0`).then((response) => {
      dispatch(storeLocations(response.data.locations));
    }).catch ((e) => {
      console.log(e);
    });
  };
};

exports.searchProducts = (product_name, storeId) => {
  return function(dispatch) {
    //console.log('DISP:',dispatch);
    return axios.get(`https://api.goodzer.com/products/v0.1/search_in_store/?storeId=${storeId}&query=${product_name}&apiKey=125cbddf3880cb1ba652a7c269ba1eb0`).then((response) => {
      // console.log("000000000", response.data);
      //console.log('PRODS_RESP:',response);
      dispatch(storeProducts(response.data.products));
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
  //console.log('PROD:',products);
  return {
    type: 'RECEIVE_ALL_PRODUCTS',
    products
  };
};
