import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.image} source={{ uri: this.props.hotel.image }} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>{this.props.hotel.name}</Text>
          <Text style={styles.stars}>{this.props.hotel.stars} estrellas</Text>
          <Text style={styles.price}>$ {this.props.hotel.price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  image: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 150,
  },
  info: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  name: {
    fontSize: 25,
    marginTop: 5,
    color: '#212121'
  },
  stars: {
    fontSize: 15,
    marginTop: 2,
    color: 'grey'
  },
  price: {
    color: '#E59400',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10
  },
});

export default Detail;