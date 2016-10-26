"use strict";

import React, {Component} from "react";
import css from "./styles/_footer";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data) {
      this.setState({
        app: this.props.data
      });
    }
  }

  render() {
    return (
      <div id="footer" className="footer">
        <div className="page-wrapper">
          <span className="app-version">{this.state.app.name} v{this.state.app.version}</span>
        </div>
      </div>
    );
  }
}

export default Footer;
