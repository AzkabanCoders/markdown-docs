"use strict";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// Components
import Header from './components/ui-Header/header';
import Sidebar from './components/ui-Sidebar/sidebar';
import MenuVertical from './components/ui-MenuVertical/menu-vertical';
import MainContent from './components/ui-MainContent/main-content';
// Styles
import style_main from './styles/_main';
import style_appName from './styles/commons/_app-name';

class Base extends Component {
  constructor(props) {
    super(props);
    this.children = React.PropTypes.element;
    this.state = {};
  }

  render() {

    return (
      <div>
        <div className="wrapper">
          <Header id="header" />
          <div className="wrapper flex-row">
            <Sidebar id="side-bar-menu-left" className="menu-left left" >
              <div id="app-name" className="app-name">
                  Webstore.styleguide
              </div>
              <MenuVertical className="menu-list vertical" />
            </Sidebar>
            <MainContent>
              {this.props.children}
            </MainContent>
          </div>
        </div>
      </div>
    );
  }
}
export default Base;
