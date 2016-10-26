"use strict";

import React, {Component} from "react";
import css from "./styles/_header";
import ImageLoader from "../utils/image-loader";

class Header extends Component {
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
      <header id={this.props.id} className='noselect'>
        <div className="page-wrapper">
          <h1 className="logo">
            <ImageLoader src={this.props.logo} href="./#/" height="25" />
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
