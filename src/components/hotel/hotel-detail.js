import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import HotelDetail from '../hotel/detail';
import CommentList from '../comment-list';

class Hotel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HotelDetail hotel={this.props.hotel} />
        <View style={styles.title}>
          <Text style={styles.text}>Comentarios</Text>
        </View>
        <CommentList comments={Array(50).fill({ title: 'Excelente hotel', content: 'Un excelente lugar para pasar vacaciones', author: 'Jhon Doe' })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    backgroundColor: '#E59400',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10
  }
});

export default Hotel;