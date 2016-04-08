"use strict";

import React, {Component} from "react";
import css from "./styles/_search-box";
import cssResults from "./styles/_search-box-result";
import SVGInline from "react-svg-inline";
import Icon from "./../../resources/images/svg/search.svg";


class ResultItem extends Component {
  render() {
    return (
      <li className="search-result-item">
        <div className="search-result-details">
          <span className="section">Elements</span>
          <span className="section"> - Buttons</span>
        </div>
        <span className="title">Title</span>
        <span className="description">Lorem ipsum <span className="highlight">dolor</span> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <span className="highlight">dolor</span>e magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <span className="highlight">dolor</span> in reprehenderit in voluptate velit esse cillum <span className="highlight">dolor</span>e eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </li>
    );
  }
}


class Results extends Component {
  render() {
    return (
      <div className="search-box-result">
        <p className="search-box-header">Search result:</p>
        <ul className="search-result">
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </ul>
      </div>
    );
  }
}

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="search-wrapper">
          <SVGInline svg={Icon} className="icon-search" fill="#FFF" cleanup={true} height="22px"/>
          <input type="search" placeholder="Search..." />
        </div>
        <Results />
      </div>
    );
  }
}

export default SearchBox;
