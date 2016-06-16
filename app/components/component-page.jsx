"use strict";

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Utils from "../utils";
import Styles from "./utils/styles-loader";
import Scripts from "./utils/scripts-loader";
import Highlight from "react-highlight";

// Components
import Main from '../main';
var IframeContent;

var setIframeContent = (IframeComponent) => {
  let el = document.createElement("div"),
      iframe = document.getElementById("content-frame"),
      iframeBody = iframe.contentWindow.document.body;
      iframeBody.setAttribute("class", "main-content iframe");
      iframe.height = 0;
  // Rendering component on temporary div
  ReactDOM.render(IframeComponent, el);
  // Setting iframe content from rendered div's content
  iframeBody.innerHTML = el.innerHTML;
  // Clean el (for perf on garbage collector)
  el =  null;
  // Setting height of iframe from atual content's height frame
  setTimeout(() => {
    let iframeHeight = iframeBody.children[0].offsetHeight;
    iframe.height = iframeHeight + 20;
  }, 50);
};

class ComponentPageContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Data props comes from Main context
    let contentId = this.props.contentId,
        data = Utils.content.get(this.props.data, contentId),
        styles = data.styles || [],
        scripts = data.scripts || [];

        styles = styles.concat([
            "https://highlightjs.org/static/demo/styles/zenburn.css",
            "./css/app.css"
          ]);

    return (
      <div>
        <Styles data={styles} />
        <h2 className="component-name-title">{data.title}</h2>
        <Highlight innerHTML={true}>{data.contents}</Highlight>
        <Scripts data={scripts} />
      </div>
    );
  }
}


class ContentIframe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    setIframeContent(IframeContent);
  }

  render() {
    IframeContent =  <ComponentPageContent contentId={this.props.contentId || this.props.app.home || ""} data={this.props.data}/>
    return (
      <iframe id="content-frame" frameBorder={0} scrolling="no" seamless="seamless" width="100%" height="500px"></iframe>
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
        <ContentIframe contentId={this.props.params.componentId} />
      </Main>
    );
  }

}

export default ComponentPage;
