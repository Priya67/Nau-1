import axios from 'axios';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const CLEAR_LOCATIONS = 'CLEAR_LOCATIONS';

const fetchLocationsRootURL = 'https://api.goodzer.com/products/v0.1/search_locations/';
const searchInStoreRootURL = 'https://api.goodzer.com/products/v0.1/search_in_store/';
const lat = 37.799238;
const lng = -122.402038;
const apiKey = "b5ea37213039865c56f42eaad63d6e4a";

function sleep(miliseconds) { var currentTime = new Date().getTime(); while (currentTime + miliseconds >= new Date().getTime()) { } }

export const fetchLocations = (productName, radius) => dispatch => {
  // console.log(productName);
  // console.log(radius);
  axios.get(
    `${fetchLocationsRootURL}?query=${productName}&lat=${lat}&lng=${lng}&radius=${radius}&apiKey=${apiKey}`
  ).then(
    response => {
      const { locations } = response.data;
      locations.forEach(location => {
        const storeId = location.store_id;
        axios.get(
          `${searchInStoreRootURL}?storeId=${storeId}&query=${productName}&apiKey=${apiKey}`
        ).then(
          response => {
            if (response.data.status !== "error") {
              const { products } = response.data;
              location.products = products;
              dispatch(receiveLocation(location));
            }
          }
        );
      });
    }
  );
};

export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
});

export const clearLocations = () => ({
  type: CLEAR_LOCATIONS
});
