"use strict";

import React, {Component} from 'react';
import Utils from "../utils";
import Styles from "./utils/styles-loader";
import Scripts from "./utils/scripts-loader";

// Components
import Main from '../main';

class ComponentPageContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Data props comes from Main context
    let data = Utils.content.get(this.props.data, this.props.contentId),
        styles = data.styles || [],
        scripts = data.scripts || [];

    return (
      <div>
        <Styles data={styles} />
        <h2 className="component-name-title">{data.title}</h2>
        <div className="content" dangerouslySetInnerHTML={{__html: data.contents}}></div>
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

  componentDidUpdate() {
    $(document).trigger("applyHighlight");
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
