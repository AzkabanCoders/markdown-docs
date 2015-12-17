"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
// Components
import Main from './main';
import ComponentPage from './components/component-page';

ReactDOM.render(
  <Router>
    <Route path="/" component={ComponentPage}>
      <Route path="component/:componentId" component={ComponentPage}/>
    </Route>
  </Router>
, document.querySelector('#app'));
