import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ui-Header';


class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

ReactDOM.render(<Header />, document.querySelector('#app'));
