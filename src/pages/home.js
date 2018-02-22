import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator } from 'react-native';
import HotelList from '../components/hotel/hotel-list';
import { getHotels } from '../api-client';

class Home extends Component {
  state = {
    hotels: null,
    hotelsBackup: null
  }
  setSearchText(event) {
    searchText = event.nativeEvent.text;
    hotels = this.state.hotelsBackup;
    searchText = searchText.trim().toLowerCase();
    hotels = hotels.filter(n => n.name.toLowerCase().match( searchText ));
    this.setState({ hotels });
  }
  componentDidMount() {
    getHotels().then(hotels => this.setState({ hotels, hotelsBackup: hotels }))
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          placeholder=" Busca un hotel"
          onChange={this.setSearchText.bind(this)}
        />
        { !this.state.hotels && <ActivityIndicator style={styles.spinner} size="large" /> }
        { this.state.hotels && <HotelList hotels={this.state.hotels} /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#F2F2F2',
  },
  search: {
    height: 40,
    backgroundColor: 'white',
    borderColor: '#DBDBDB',
    borderRadius: 3,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10
  },
  spinner: {
    paddingTop: 20,
  }
});

export default Home;