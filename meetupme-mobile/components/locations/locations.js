import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import Maps from '../maps/maps';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { fetchLocations, clearLocations } from '../../actions/location_actions';
import { NavigationActions } from 'react-navigation';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.showMapView = this.showMapView.bind(this);
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

  showMapView() {
    console.log("bye", this.props);
    this.props.navigation.navigate('Maps', this.props);
  }

  render() {
    const { locations } = this.props;
    const displayProducts = locations.map(location => {
       return (
         <View style={styles.container} key={location.id}>
           {location.products.map(product => (
             <View style={styles.indexItem} key={product.id}>
               <View style={styles.prodInfo}>
                 <Image
                   style={{width: 50, height: 50}}
                   source={{uri: product.image}}
                   />
                 <Text>{product.title}</Text>
                 <Text>${product.price}</Text>
               </View>
               <View style={styles.storeInfo}>
                 <Text>{location.name}</Text>
               </View>
             </View>
           ))}
         </View>
       );
    });

    return (
      <View>
        <TouchableOpacity style={styles.mapView} onPress={this.showMapView}>
          <Text>Map View</Text>
        </TouchableOpacity>
        <ScrollView>
          <View>{displayProducts}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFCd',
  },
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
  },
  indexItem: {
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
  },
  prodInfo: {
    width: '50%',
    padding: 5

  },
  storeInfo: {
    width: '50%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapView: {
    borderRadius: 5,
    width: '20%',
    borderColor: 'transparent',
    backgroundColor: '#6FE8C8',
    marginBottom: 20,
    padding: 5,
    alignSelf:'flex-end'
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
