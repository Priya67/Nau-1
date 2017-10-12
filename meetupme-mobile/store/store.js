import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
import rootReducer from '../reducers/root_reducer';

var defaultState = {};

export const configureStore = (initialState=defaultState) => {
  var store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    autoRehydrate()
  ));
  console.log(store);
  persistStore(store, {storage: AsyncStorage});
  return store;
};
