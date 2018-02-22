import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Hotel extends Component {
  showDetail(hotel) {
    Actions.hotelDetail({ hotel })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: this.props.hotel.image }} />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>{this.props.hotel.name}</Text>
          <Text style={styles.stars}>{this.props.hotel.stars} estrellas</Text>
          <Text style={styles.price}>$ {this.props.hotel.price}</Text>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.button} onPress={() => this.showDetail(this.props.hotel)}>
            <Text style={styles.buttonText}>Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2,
  },
  image: {
    width: 80,
    height: 100,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginTop: 5
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    color: '#212121'
  },
  stars: {
    fontSize: 13,
    marginTop: 2,
    color: 'grey'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
  },
  aditionalInfo: {
    flex: 1,
    alignItems: 'center'
  },
  price: {
    color: '#E59400',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffa500',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  action: {
    flex: 1,
    width: 100,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
});

export default Hotel;