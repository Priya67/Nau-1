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
    // this.getLocations = this.getLocations.bind(this);
  }

  componentWillMount() {
    this.props.searchLocations("ipad");
  }

  render() {
    const displayLocations = this.props.locations.map(
      location => (<Text>{location.name}</Text>)
    );
    console.log(this.props);
    return (
      <View>
        <Text>Helllloooo</Text>
        <View>{displayLocations}</View>
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
