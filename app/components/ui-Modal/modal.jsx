"use strict";

import React, {Component} from "react";
import css from "./styles/_modal";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.children = React.PropTypes.element;
    this.state = {};
  }

  render() {
    return (
      <div className="modal overlay">
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
