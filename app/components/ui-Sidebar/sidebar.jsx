"use strict";

import React, {Component} from 'react';
import css from './styles/_sidebar';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.children = React.PropTypes.element;
    this.state = {
      collapsed: false
    };
  }
  render() {
    let isCollapsed = this.state.collapsed ? "collapsed" : "";

    return (
      <div id={this.props.id} className={"sidebar " + this.props.className + " " + isCollapsed}>
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
