import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Detail from '../hotel/detail';
import CommentList from '../comment/comment-list';

class HotelDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Detail hotel={this.props.hotel} />
        <View style={styles.title}>
          <Text style={styles.text}>Comentarios</Text>
        </View>
        <CommentList comments={this.props.hotel.comments} />
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

export default HotelDetail;