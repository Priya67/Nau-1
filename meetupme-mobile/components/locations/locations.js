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
import { NavigationActions } from 'react-navigation';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    // this.queryDidChange = this.queryDidChange.bind(this);
    // this.backToSearch = this.backToSearch.bind(this);
  }

  componentWillMount() {
    const { productName, searchRadius } = this.props.navigation.state.params;
    this.props.fetchLocations(productName, searchRadius);
    console.log("params", this.props.navigation.state.params);
    console.log("locations", this.props.locations);
  }

  componentWillUnmount() {
    this.props.clearLocations();
  }

  // componentWillUnmount() {
  //   const resetAction = NavigationActions.reset({
  //     index: 0,
  //     actions: [
  //       NavigationActions.navigate({ routeName: 'Locations'})
  //     ]
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.queryDidChange(nextProps)) {
  //     console.log('did query change?', this.queryDidChange(nextProps));
  //     console.log("current props", this.props);
  //     console.log("next props", nextProps);
  //
  //     this.props.clearLocations();
  //
  //     const { productName, searchRadius } = nextProps.navigation.state.params;
  //
  //     this.props.fetchLocations(productName, searchRadius);
  //   }
  // }
  //
  // queryDidChange(nextProps) {
  //   const currentParams = this.props.navigation.state.params;
  //   const nextParams = nextProps.navigation.state.params;
  //   return (
  //     currentParams.productName !== nextParams.productName ||
  //     currentParams.searchRadius !== nextParams.searchRadius
  //   );
  // }

  // backToSearch() {
  //   const { setParams } = this.props.navigation;
  //   setParams({});
  //   this.props.navigation.navigate('Main');
  // }

  render() {
    const { locations } = this.props;
    // console.log(locations);
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

// <View style={styles.buttonContainer}>
//   <TouchableOpacity style={styles.goBack} onPress={this.backToSearch}>
//     <Text style={styles.goBackText}>Back To Search</Text>
//   </TouchableOpacity>
// </View>

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: '80%',
    alignSelf: 'flex-end',
  },
  goBack: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#183059',
    marginBottom: 20,
    padding: 5,
    width: '40%',
    alignSelf:'flex-end'

  },
  goBackText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
});


const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: (productName, radius) => dispatch(fetchLocations(productName, radius)),
  clearLocations: () => dispatch(clearLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
