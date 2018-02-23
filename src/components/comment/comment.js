import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Comment extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{this.props.comment.author}</Text>
        <Text style={styles.conent} numberOfLines={2}>{this.props.comment.content}</Text>
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
    marginTop: 5,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    color: '#212121'
  },
  conent: {
    fontSize: 15,
    marginTop: 5,
    color: 'grey'
  }
});

export default Comment;