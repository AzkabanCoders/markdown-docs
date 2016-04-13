"use strict";

import React, {Component} from "react";
import css from "./styles/_search-box";
import cssResults from "./styles/_search-box-result";
import SVGInline from "react-svg-inline";
import Icon from "./../../resources/images/svg/search.svg";
import Constants from "../../constants/";
import Utils from "../../utils/";
import { Router, Route, Link} from "react-router";

var highlightText = (terms, text) => {
  var highlightedText,
      regexp = new RegExp("("+ terms.filter(String).join("|") +")", "igm");

  if(terms.filter(String).length === 0) {
    highlightedText = text;
  } else {
    highlightedText = text.replace(regexp, "<span class=\"highlight\">$1</span>");
  }

  return highlightedText;
};

var getResultText = (text, textSize, terms) => {
  return highlightText(terms, Utils.content.htmlToText(text|| "").substring(0, textSize));
};




class ResultItem extends Component {
  render() {
    let data = this.props.data,
        textSize = this.props.resultTextSize,
        highlightTerms = this.props.highlightTerms;
    return (
      <li className="search-result-item">
        <Link to={Constants.MENU_BASEPATH + data.section.toLowerCase() + "/" + data.id}>
        <div className="search-result-details">
          <span className="section">{data.section}</span>
          <span className="section"> - {data.title}</span>
        </div>
        <span className="title">{data.title}</span>
        <span className="description" dangerouslySetInnerHTML={
            {__html:getResultText(data.contents, textSize, highlightTerms)}
          }></span>
        </Link>
      </li>
    );
  }
}


class Results extends Component {
  render() {
    var data = this.props.data,
        textSize = this.props.resultTextSize,
        highlightTerms = this.props.highlightTerms,
        nResults = data.length,
        visibilityClass = this.props.visibility ? "" : "hide";

    var resultItems = Object.keys(data).map(function(result) {
      return <ResultItem key={`result-item-${result}`} data={data[result]} resultTextSize={textSize} highlightTerms={highlightTerms} />;
    });
    var noResults = <li className="no-results">
          <SVGInline svg={Icon} className="icon-search no-results" cleanup={true} height="62px"/>
        </li>;

    var results = nResults > 0 ? resultItems : noResults;

    return (
      <div className={`search-box-result ${visibilityClass}`}>
        <p className="search-box-header">{`Search result: ${nResults} ${nResults > 1 ? "items" : "item"} found.`}</p>
        <ul className="search-result">
          {results}
        </ul>
      </div>
    );
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      terms: [],
      results: []
    };
  }

  render() {
    var filteredData = Utils.content.search(this.props.data, this.state.terms) || [],
        terms = this.state.terms,
        data = this.props.data,
        filteredData = Utils.content.search(data, terms) || [];

    var handleChange = (event) => {
      // removing all duplicated spaces characters and make an Array with all terms
      this.setState({
        isSearching: true,
        terms: event.target.value.replace(/\s+/g," ").split(" "),
        results: filteredData
      });
    };

    var handleFocus = (event) => {
      this.setState({
        isSearching: true
      });
    };

    var handleBlur = (event) => {
      this.setState({
        isSearching: false
      });
    };


    return (
      <div className="search-box">
        <div className="search-wrapper">
          <SVGInline svg={Icon} className="icon-search" fill="#FFF" cleanup={true} height="22px"/>
          <input type="search" placeholder="Search..." onChange={handleChange} onBlur={handleBlur} />
        </div>
        <Results data={this.state.results} visibility={this.state.isSearching} resultTextSize={500} highlightTerms={this.state.terms} />
      </div>
    );
  }
}

export default SearchBox;
