import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from '../components/main/main';
import Entry from '../components/_entry';
import Login from '../components/auth/login';
import Locations from '../components/locations/locations';

const Routers = StackNavigator(
  {
  Main: {screen: Main},
  Locations: {screen: Locations}
  }
);

export default Routers;
