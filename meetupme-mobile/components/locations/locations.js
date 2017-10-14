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
      allProducts: []
    };
  }

  componentWillMount() {
    // console.log(this.props.locations);
    const product_name = this.props.navigation.state.params.product_name;
    this.props.searchLocations(product_name, this.props.navigation.state.params.searchRadius);
    let products = [];
    this.props.locations.forEach((location, i) => {
      //console.log('location',location);
      console.log(i);
      // this.props.locations[i]['p'] = this.props.searchProducts(product_name, location.store_id);
      merge(location, this.props.searchProducts(product_name, location.store_id));
// ;      this.props.locations[i].push(this.props.searchProducts(product_name, location.store_id));
//       console.log("testing",this.props.searchProducts(product_name, location.store_id));
      console.log(location);
    });
    // console.log("Final:",this.props.locations);
    // this.props.locations.forEach(location => {
    //   const locationProducts = this.props.searchProducts(product_name, location.store_id);
    //   products.push({ location: locationProducts});
    // });
    // console.log("products", products);
    this.setState({allProducts: products});
  }

  render() {
    // console.log(this.state.allProducts);
    const displayProducts = this.props.locations.forEach(
       set => console.log("anything")
    );

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
