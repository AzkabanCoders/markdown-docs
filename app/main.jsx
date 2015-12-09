"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Components
import Header from './components/ui-Header/header';
import Sidebar from './components/ui-Sidebar/sidebar';
import MenuVertical from './components/ui-MenuVertical/menu-vertical';
import MainContent from './components/ui-MainContent/main-content';
// Styles
import style_main from './styles/_main';
import style_appName from './styles/commons/_app-name';

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {};
   }

  componentWillMount() {
    $.get(this.props.source, function(result) {
      this.state.data="result.data[0].device";
    }.bind(this));
  }

  render() {

    return (
      <div>
        <div className="wrapper">
          <Header id="header" />
          <div className="wrapper flex-row">
            <Sidebar id="side-bar-menu-left" className="menu-left left" >
              <div id="app-name" className="app-name">
                  Webstore.styleguide{this.state.data}
              </div>
              <MenuVertical className="menu-list vertical" data={[1,2]} />
            </Sidebar>
            <MainContent>
              {this.props.content}
            </MainContent>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App source="./resources/data.json"/>, document.querySelector('#app'));
