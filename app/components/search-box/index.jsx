"use strict";

import React, {Component} from "react";
import css from "./styles/_search-box";
import SVGInline from "react-svg-inline";
import Icon from "./../../resources/images/svg/search.svg";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="search-wrapper">
          <SVGInline svg={Icon} className="icon-search" fill="#FFF" cleanup={true} height="22px"/>
          <input type="search" placeholder="Search..." />
        </div>
      </div>
    );
  }
}

export default SearchBox;
