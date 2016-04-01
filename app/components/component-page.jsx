"use strict";

import React, {Component} from 'react';
import Utils from "../utils";

// Components
import Main from '../main';

class ComponentPageContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Data props comes from Main context
    let data = Utils.content.get(this.props.data, this.props.contentId);
    return (
      <div>
        <h2 className="component-name-title">{data.title}</h2>
        <div className="content" dangerouslySetInnerHTML={{__html: data.contents}}></div>
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
