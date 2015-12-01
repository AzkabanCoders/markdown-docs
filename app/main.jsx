import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ui-Header';


class App extends Component {
  log() {
      console.log("aaaa");
  }

  render() {
    return (
      <Header />
    );
  }
}

App.log();

ReactDOM.render(<Header />, document.querySelector('#app'));
