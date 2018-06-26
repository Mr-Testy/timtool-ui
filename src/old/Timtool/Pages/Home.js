import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return <p>lol {this.props.location.pathname} lol</p>;
  }
}
