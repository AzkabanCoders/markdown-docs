"use strict";

import React, {Component} from "react";

class ScriptsLoader extends Component {
  render() {
    let scripts = this.props.data.map(function(result, index) {
          return <script key={`script-${index}`} src={result}></script>;
        });
    return (
      <div>
        {scripts}
      </div>
    );
  }
}

export default ScriptsLoader;
