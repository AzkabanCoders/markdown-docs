"use strict";

import React, {Component} from 'react';
import AppStore from './../stores/AppStore';

// Components
import Main from '../main';

class ComponentPage extends Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getData(this.props.params.componentId) || {};
  }

  // Updating state
  componentWillReceiveProps(nextProps) {
    this.state = AppStore.getData(nextProps.params.componentId) || {};
  }

  // Updating state
  componentWillReceiveProps(nextProps) {
    this.state = AppStore.getData(nextProps.params.componentId) || {};
  }

  // If id is not the same than previous should update the component
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.params.componentId !== this.props.params.componentId;
  }

  componentDidUpdate() {
    this.state = AppStore.getData(this.props.params.componentId) || {};
  }

  render() {
    return (
      <Main>

        <h2>{this.state.title}</h2>
        <div className="content" dangerouslySetInnerHTML={{__html: this.state.contents}}></div>
      </Main>
    );
  }

}

export default ComponentPage;
