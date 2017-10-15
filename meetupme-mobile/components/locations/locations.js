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
import { searchLocations, searchProducts } from '../../actions/location_actions';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      answer: []
    };
  }

  componentWillMount() {
    // console.log(this.props.locations);
    const product_name = this.props.navigation.state.params.product_name;
    let products = [];
    this.props.searchLocations(product_name, this.props.navigation.state.params.searchRadius).then(
      // console.log("props", this.props);
      Object.keys(this.props.locations).forEach(key => {
        const storeProducts = this.props.searchProducts(product_name, this.props.locations[key].store_id);
        products.push(storeProducts);
      })
    );
    // this.props.locations.map((location, i) => {
    //   console.log("each");
    //   products = this.props.searchProducts(product_name, location.store_id);
    //   // merge(location, this.props.searchProducts(product_name, location.store_id));
    // });

    // this.props.locations.forEach(location => {
    //   const locationProducts = this.props.searchProducts(product_name, location.store_id);
    //   products.push({ location: locationProducts});
    // });

    this.setState({allProducts: products});
    console.log("location-state", this.state);
  }

  render() {
    const displayProducts = Object.keys(this.props.locations).forEach(key => {
       <Text>key</Text>;
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
  searchLocations: (product_name, radius) => dispatch(searchLocations(product_name, radius)),
  searchProducts: (product_name, storeId) => dispatch(searchProducts(product_name, storeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
