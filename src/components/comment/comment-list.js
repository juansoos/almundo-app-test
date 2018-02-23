import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Comment from './comment';

class CommentList extends Component {
  state = { comments: this.props.comments }
  updateComments = (comments) => this.setState({ comments })
  componentWillReceiveProps(newProps) {
    if (newProps.comments !== this.props.comments) {
      this.updateComments(newProps.comments)
    }
  }
  render() {
    return (
      <FlatList
        refreshing={true}
        data={this.state.comments}
        extraData={this.state.comments}
        keyExtractor={(item, index) => item._id}
        renderItem={({item}) => <Comment comment={item} />}
      />
    );
  }
}

export default CommentList;