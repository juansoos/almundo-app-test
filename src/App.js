import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeView from './pages/home';
import hotelDetailView from './pages/detail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeView} title="Lista de hoteles" />
          <Scene key="hotelDetail" component={hotelDetailView} title="Detalle" />
        </Scene>
      </Router>
    );
  }
}
