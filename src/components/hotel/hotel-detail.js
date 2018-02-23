import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Detail from '../hotel/detail';
import CommentList from '../comment/comment-list';

class HotelDetail extends Component {
  state = { comments: this.props.hotel.comments }
  handleSend = () => {
    comment = { author: 'Julián Sotelo', content: this.state.text };
    comments = this.state.comments;
    comments.push(comment);
    this.setState({ comments, text: '' });
  }
  handleChangeText = (text) => this.setState({ text })
  render() {
    return (
      <View style={styles.container}>
        <Detail hotel={this.props.hotel} />
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Comentarios</Text>
        </View>
        <CommentList comments={this.state.comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            placeholder="Agrega un comentario sobre el hotel"
            onChangeText={this.handleChangeText}
          />
          <Button
            onPress={this.handleSend}
            title="Enviar"
            color="#E59400"
            accessibilityLabel="Enviar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    backgroundColor: '#E59400',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10
  },
  inputContainer: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: -2,
    },
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 40
  }
});

export default HotelDetail;