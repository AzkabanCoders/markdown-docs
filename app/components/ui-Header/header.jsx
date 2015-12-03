"use strict";

import React, { Component } from "react";
import css from "./styles/_header";
import ImageLoader from "../ui-Utils/image-loader";

class Header extends Component {

  render() {
    return (
      <header id={this.props.id}>
        <h1 className="logo">
          <ImageLoader src="/images/global/logo.svg" href="/" width="170px" height="40" />
        </h1>
      </header>
    );
  }
}

export default Header;
