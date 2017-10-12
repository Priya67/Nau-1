import React from 'react';
import { Provider } from 'react-redux';
import {configureStore} from './store/store';
import Entry from './components/_entry';
// import Exponent from 'exponent';
import { AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  ActivityIndicator
} from 'react-native';

import { fetchMeetups } from './constants/api';
const store1 = configureStore();

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Provider store={store1}>
        <Entry />
      </Provider>
    );
  }
}
export default App;
