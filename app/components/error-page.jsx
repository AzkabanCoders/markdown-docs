"use strict";

import React, {Component} from 'react';
import Main from '../main';

class ErrorPage extends Component {
  render() {
    return (
      <Main><div>Oops! <br/> Página não encontrada.  :( </div></Main>
    );
  }
}

export default ErrorPage;
