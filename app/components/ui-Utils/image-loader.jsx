"use strict";

import React, {Component} from 'react';

class ImageLoader extends Component {
  render() {
    let href = this.props.href || false,
        image;

    if(href) {
      image =  <a href={this.props.href}><img src={this.props.src} width={this.props.width} height={this.props.height} /></a>;
    } else {
      image = <img src={this.props.src} width={this.props.width} height={this.props.height} />;
    }

    return (
      image
    );
  }
}

export default ImageLoader;
