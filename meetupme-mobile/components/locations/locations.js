import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { fetchLocations, clearLocations } from '../../actions/location_actions';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.queryDidChange = this.queryDidChange.bind(this);
  }

  componentWillMount() {
    const { productName, searchRadius } = this.props.navigation.state.params;
    this.props.fetchLocations(productName, searchRadius);
    // console.log(this.props.navigation.state.params);
    // console.log(this.props.locations);
  }

  componentWillReceiveProps(nextProps) {
    if (this.queryDidChange(nextProps)) {
      // console.log('did query change?', this.queryDidChange(nextProps), this.props, nextProps);

      this.props.clearLocations();

      const { productName, searchRadius } = nextProps.navigation.state.params;

      this.props.fetchLocations(productName, searchRadius);
    }
  }

  queryDidChange(nextProps) {
    const currentParams = this.props.navigation.state.params;
    const nextParams = nextProps.navigation.state.params;
    return (
      currentParams.productName !== nextParams.productName ||
      currentParams.searchRadius !== nextParams.searchRadius
    );
  }

  render() {
    const { locations } = this.props;
    const displayProducts = locations.map(location => {
       return (
         <View key={location.id}>
           <Text>{location.name}</Text>
           {location.products.map(product => (
             <View key={product.id}>
               <Text>{product.title}</Text>
               <Text>{product.price}</Text>
             </View>
           ))}
         </View>
       );
    });

    return (
      <View>
        <View>{displayProducts}</View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  locations: state.locations
});

//  <Text key={set.keys[0].id}>
//    {set.keys[0].name},
//    {set.values[0].map(product =>
//      <Text key={product.id}>
//        {product.title}
//        {product.price}
//      </Text>
//    )}
//  </Text>
const mapDispatchToProps = dispatch => ({
  fetchLocations: (productName, radius) => dispatch(fetchLocations(productName, radius)),
  clearLocations: () => dispatch(clearLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
