"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppStore from './../stores/AppStore';

// Components
import Main from '../main';

class ComponentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: AppStore.getData(this.props.params.componentId)
    };
  }

  render() {
    return (
      <Main>
        <h1>{this.state.data.title}</h1>
        {this.state.data.contents}
      </Main>
    );
  }
}

export default ComponentPage;
