import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Comment from './comment';

class CommentList extends Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.comments}
        renderItem={({item}) => <Comment comment={item} key={item._id} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 10,
  },
});

export default CommentList;