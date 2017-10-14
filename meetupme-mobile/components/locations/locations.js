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
    // console.log(this.props.navigation.state);
    this.props.searchLocations(this.props.navigation.state.params.product_name, this.props.navigation.state.params.searchRadius);
  }

  render() {
    const displayLocations = this.props.locations.map(
      location => (<Text key={location.id}>{location.name}</Text>)
    );
    return (
      <View>
        <View>{displayLocations}</View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  searchLocations: (product_name, radius) => dispatch(searchLocations(product_name, radius))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
