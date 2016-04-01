"use strict";

import React, {Component} from "react";
import css from "./styles/_header";
import ImageLoader from "../ui-Utils/image-loader";

class Header extends Component {
  render() {
    return (
      <header id={this.props.id} className='noselect'>
        <h1 className="logo">
          <ImageLoader src={this.props.logo} href="/" height="40" />
        </h1>
      </header>
    );
  }
}

export default Header;
