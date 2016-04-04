"use strict";

import React, {Component} from "react";

class StylesLoader extends Component {
  render() {
    let styles = this.props.data.map(function(result, index) {
          return <link key={`style-${index}`} rel="stylesheet" href={result} charSet="utf-8" />;
        });
    return (
      <div>
        {styles}
      </div>
    );
  }
}

export default StylesLoader;
