import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Hotel from '../hotel/hotel'

class HotelList extends Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.hotels}
        renderItem={({item}) => <Hotel hotel={item} key={item._id} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 10,
  },
});

export default HotelList;