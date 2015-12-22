import React, {Component} from 'react';
import {Router, Route} from 'react-router/umd/ReactRouter';
import {createHashHistory} from 'history'

// Components
import Main from '../main';
import ComponentPage from '../components/component-page';
import IndexPage from '../components/index-page';
import ErrorPage from '../components/error-page';

var history = createHashHistory({
  queryKey: false
});

export default (
    <Router history={history}>
      <Route path='/' component={IndexPage} />
        <Route path='/component/:componentId' component={ComponentPage}/>
        <Route path='/docs/:section/:componentId' component={ComponentPage}/>
      <Route path='*' component={ErrorPage} />
    </Router>
);
