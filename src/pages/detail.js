import React, { Component } from 'react';
import Hotel from '../components/hotel/hotel-detail';

class HotelDetail extends Component {
  render() {
    return (
      <Hotel hotel={this.props.hotel} key={this.props.hotel._id} />
    );
  }
}

export default HotelDetail;