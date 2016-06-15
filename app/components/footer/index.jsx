"use strict";

import React, {Component} from "react";
import css from "./styles/_footer";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data) {
      this.setState({
        data: this.props.data
      });
    }
  }

  render() {
    return (
      <div id="footer" className="footer">
        <div className="page-wrapper">
          <span className="app-version">AppDocs v1.5.0</span>
        </div>
      </div>
    );
  }
}

export default Footer;
