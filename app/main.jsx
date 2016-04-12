"use strict";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Constants from "./constants/";
import Utils from "./utils";

// Components
import Header from './components/header';
import Sidebar from './components/sidebar';
import MenuVertical from './components/menu-vertical';
import MainContent from './components/main-content';
import AppName from './components/utils/app-name';
// Styles
import style_main from './styles/_base';
import style_appName from './styles/commons/_app-name';
import style_syntax from './styles/commons/_syntax';

class Base extends Component {
  constructor(props) {
    super(props);
    this.children = React.PropTypes.element;
    this.state = {
      menu: {},
      app: {}
    };
  }

  fetchData(menuUrl) {
    let url = `${menuUrl}`;
    fetch(url)
      .then((req) => req.json())
      .then((res) => {
        this.setState({
          menu: Utils.menu.mount(res.data.data),
          data: res.data.data,
          app: res.data.app
        });
      })
      .catch((error) => console.log("Error on fetch menu data: ", error));
  }

  componentDidMount() {
    this.fetchData(`${Constants.API_HOST}/${Constants.API_MENU_ENDPOINT}`);
  }

  render() {
    let data = this.state.data;
    var childrenWithProps = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, { data: data });
    });


    return (
      <div className="wrapper page">
        <Header id="header" logo={this.state.app.logo} data={this.state.data} />
        <div className="wrapper flex-row">
          <Sidebar id="side-bar-menu-left" className="menu-left noselect left" >
            <AppName className="app-name" label={this.state.app.name} />
            <MenuVertical className="menu-list vertical" data={this.state.menu} />
          </Sidebar>
          <MainContent>
            {childrenWithProps}
          </MainContent>
        </div>
      </div>
    );
  }
}
export default Base;
