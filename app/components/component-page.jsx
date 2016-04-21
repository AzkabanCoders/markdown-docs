"use strict";

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Utils from "../utils";
import Styles from "./utils/styles-loader";
import Scripts from "./utils/scripts-loader";
import Highlight from "react-highlight";

// Components
import Main from '../main';
var teste;
class ComponentPageContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {

    console.log("init", "componentDidUpdate");
    var iframe = document.getElementById("content-frame"),
        iDocument = iframe.contentWindow.document;


        iDocument.open();
        iDocument.write(teste.props.children);
        iDocument.close();
        console.log("end","componentDidUpdate");

        // var el = document.createElement("div");
        // ReactDOM.render(iframeContent, el);


      console.log("el", teste.props.children);


  }

  render() {
    // Data props comes from Main context
    let data = Utils.content.get(this.props.data, this.props.contentId),
        styles = data.styles || [],
        scripts = data.scripts || [],
        htmlContent = <Highlight innerHTML={true}>{data.contents}</Highlight>;
          teste = htmlContent;
        var frame = <iframe id="content-frame" width="100%" frameBorder="0"></iframe>;
    return (
      <div>
        <Styles data={styles} />
        <h2 className="component-name-title">{data.title}</h2>
        {/*<div className="content" dangerouslySetInnerHTML={{__html: data.contents}}></div>*/}
        <Styles data={styles} />
        {/*<div id="contents" data-content={htmlContent.props.children}></div>*/}
        {/*{frame}*/}
        {htmlContent}
        <Scripts data={scripts} />
      </div>
    );
  }
}

class ComponentPage extends Component {
  constructor(props) {
    super(props);
  }

  // If id is not the same than previous should update the component
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.params.componentId !== this.props.params.componentId;
  }

  render() {
    return (
      <Main>
        <ComponentPageContent contentId={this.props.params.componentId}/>
      </Main>
    );
  }

}

export default ComponentPage;
