"use strict";

import React, { Component } from 'react';
import css from './styles/_main-content';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.children = React.PropTypes.element;
    this.translate = React.PropTypes.string;
    this.state = {
      collapsed: false
    };
  }
  render() {
    let shouldCollapse = this.state.collapsed || "",
        classNames = this.props.className || "";

    return (
      <div id={this.props.id} className={"main-content " + classNames + shouldCollapse}>
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
