import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from '../components/main/main';
import Entry from '../components/_entry';
import Login from '../components/auth/login';
import Locations from '../components/locations/locations';
import Maps from '../components/maps/maps';

const Routers = StackNavigator(
  {
  Main: {screen: Main},
  Locations: {screen: Locations},
  Maps: {screen: Maps}
  }
);

export default Routers;
