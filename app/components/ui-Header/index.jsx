import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Klayton from '../ui-Klayton';


class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1><Klayton name="Klayton" adjective="handsome"/></h1>
      </header>
    );
  }
}

export default Header;
