import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class KlaytonGato extends Component {
  render() {
    return <div>{this.props.name} is {this.props.adjective}!</div>;
  }
}

export default KlaytonGato;
