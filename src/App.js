import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform } from 'react-native';
import HomeView from './pages/home';
import hotelDetailView from './pages/detail';

export default class App extends Component {
  render() {
    const isAndroid = Platform.OS === 'android'
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeView} title="Lista de hoteles" />
          <Scene key="hotelDetail" component={hotelDetailView} title="Detalle" hideNavBar={isAndroid} />
        </Scene>
      </Router>
    );
  }
}
