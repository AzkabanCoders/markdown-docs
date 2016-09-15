import React, {Component} from 'react';
import {Router, Route, useRouterHistory} from 'react-router/umd/ReactRouter';
import {createHashHistory} from 'history';

// Components
import Main from './main';
import ComponentPage from './components/component-page';
import IndexPage from './components/index-page';
import ErrorPage from './components/error-page';

var history = useRouterHistory(createHashHistory)({
  queryKey: false
});

export default (
  <Router history={history}>
      <Route path='/' component={Main}>
        <Route path='docs/:section/:componentId' component={ComponentPage}/>
        <Route path='*' component={ErrorPage} />
      </Route>
  </Router>
);
