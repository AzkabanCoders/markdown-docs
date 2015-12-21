"use strict";

import React, {Component} from 'react';
import Main from '../main';

class ErrorPage extends Component {
  render() {
    return (
      <Main>Oops! <br/> Página não encontrada.  :( </Main>
    );
  }
}

export default ErrorPage;
