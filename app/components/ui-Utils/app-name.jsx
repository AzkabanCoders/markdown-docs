"use strict";

import React, {Component} from "react";
var AppOptions = require("../../stores/AppStore").getAppOptions();

class AppName extends Component {
  render() {
    return (
      <div id="app-name" className={this.props.className}>
          {AppOptions.name}
      </div>
    );
  }
};

export default AppName;
