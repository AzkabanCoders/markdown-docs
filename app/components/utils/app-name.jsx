"use strict";

import React, {Component} from "react";

class AppName extends Component {
  render() {
    return (
      <div id="app-name" className={this.props.className}>
          {this.props.label}
      </div>
    );
  }
};

export default AppName;
