"use strict";

import React, {Component} from "react";
import css from "./styles/_search-box";
import SVGInline from "react-svg-inline";
import Icon from "./../../resources/images/svg/search.svg";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <span className="icon"><SVGInline svg={Icon} fill="#FFF" cleanup={true}  with={28} height={28}/></span>
      </div>
    );
  }
}

export default SearchBox;
