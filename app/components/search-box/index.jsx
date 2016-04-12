"use strict";

import React, {Component} from "react";
import css from "./styles/_search-box";
import cssResults from "./styles/_search-box-result";
import SVGInline from "react-svg-inline";
import Icon from "./../../resources/images/svg/search.svg";
import Constants from "../../constants/";
import { Router, Route, Link} from "react-router";

var htmlToText = (htmlString) => {
  const el = document.createElement('div');
  el.innerHTML = htmlString;
  return el.textContent;
}

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
  return highlightText(terms, htmlToText(text|| "").substring(0, textSize));
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
        highlightTerms = this.props.highlightTerms;
    return (
      <div className="search-box-result">
        <p className="search-box-header">Search result:</p>
        <ul className="search-result">
          {
          Object.keys(data).map(function(result) {
             return <ResultItem key={`result-item-${result}`} data={data[result]} resultTextSize={textSize} highlightTerms={highlightTerms} />;
           })
          }
        </ul>
      </div>
    );
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: []
    };
  }

  render() {
    var handleChange = (event) => {
      // removing all duplicated spaces characters and make an Array with all terms
      this.setState({terms: event.target.value.replace(/\s+/g," ").split(" ")});
    };

    return (
      <div className="search-box">
        <div className="search-wrapper">
          <SVGInline svg={Icon} className="icon-search" fill="#FFF" cleanup={true} height="22px"/>
          <input type="search" placeholder="Search..." onChange={handleChange} />
        </div>
        <Results data={this.props.data} resultTextSize={500} highlightTerms={this.state.terms} />
      </div>
    );
  }
}

export default SearchBox;
