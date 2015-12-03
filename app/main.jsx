import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ui-Header/header';
import Sidebar from './components/ui-Sidebar/sidebar';
import MainContent from './components/ui-MainContent/main-content';

// Styles
import style_main from './styles/_main';
import style_appName from './styles/commons/_app-name';

class App extends Component {

  render() {
    return (
      <div>
        <div className="wrapper">
          <Header id="header" />
          <Sidebar id="menu-left" translate="left" className="menu-left" >
            <div id="app-name" className="app-name">
                Webstore.styleguide
            </div>
          </Sidebar>
          <MainContent />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
