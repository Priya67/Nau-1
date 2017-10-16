import React, { Component} from 'react';
import MapView from "react-native-maps";
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.selectOne = {};
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: this.props.navigation.state.params.navigation.state.params.searchRadius/20.0,
        longitudeDelta: this.props.navigation.state.params.navigation.state.params.searchRadius/50.0
      },
      location: null,
      errorMessage: null,
      text: "",
      desc: ""
      };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.markerPressed = this.markerPressed.bind(this);
  }
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  markerPressed(e, info) {

      this.setState({
        text: info.name
      })
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("loc", location);
    this.setState({ location: location });
    this.setState({
          region: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: this.props.navigation.state.params.navigation.state.params.searchRadius/20.0,
            longitudeDelta: this.props.navigation.state.params.navigation.state.params.searchRadius/50.0
        }
      });
    };

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.main}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          {this.props.navigation.state.params.locations.map(marker => (
          <MapView.Marker
            key={marker.id}
            coordinate={{latitude: marker.lat, longitude: marker.lng}}
            title={marker.name}
            description={this.state.desc}
            pinColor={'red'}
            onPress={(event) => this.markerPressed(event, marker)}
          />
          ))}
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  },
  main: {
    backgroundColor: 'pink',
    height: '100%'
  },
  info: {
    marginLeft: '10%',
    marginTop: '10%'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  }
});


// <View style={styles.info}>
//   <Text>{this.props.navigation.state.params.navigation.state.params.productName}</Text>
//   <Text>
//     {this.state.text}
//   </Text>
// </View>
