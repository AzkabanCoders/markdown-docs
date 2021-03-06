import React, {Component} from 'react';
import {Router, Route, useRouterHistory} from 'react-router/umd/ReactRouter';
import {createHashHistory} from 'history';

// Components
import ComponentPage from './components/component-page';
import IndexPage from './components/index-page';
import ErrorPage from './components/error-page';

var history = useRouterHistory(createHashHistory)({
  queryKey: false
});

export default (
  <Router history={history}>
      <Route path='/' component={ComponentPage}>
        <Route path=':componentId' component={ComponentPage}/>
        <Route path='docs/:componentId' component={ComponentPage}/>
        <Route path='docs/:section/:componentId' component={ComponentPage}/>
      </Route>
      <Route path='*' component={ErrorPage} />
  </Router>
);
