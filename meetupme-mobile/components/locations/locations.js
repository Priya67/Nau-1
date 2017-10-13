import React from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { searchLocations } from '../../actions/location_actions';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.getLocations = this.getLocations.bind(this);
  }

  getLocations() {
    this.props.searchLocations("ipad");
  }

  render() {
    return (
      <View>
        <Text>Helllloooo</Text>
        <Text>{this.getLocations()}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  searchLocations: (product_name) => dispatch(searchLocations(product_name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
