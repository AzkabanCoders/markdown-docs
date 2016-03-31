"use strict";

import React, {Component} from "react";
import { Router, Route, Link} from "react-router";
import Constants from "../../constants/";
// Styles
import css from "./styles/_menu-vertical";

class MenuItem extends Component {
  render() {
    return (
      <li className="menu-item">
        <Link to={Constants.MENU_BASEPATH + this.props.section.toLowerCase() + "/" + this.props.id}>{this.props.label}</Link>
      </li>
    );
  }
};

class MenuSection extends Component {
  render() {
    let menuItem = this.props.data.map(function(result) {
      return <MenuItem key={result.id} id={result.id} label={result.title} section={result.section}/>;
    });

    return (
      <li>
        <h3>{this.props.label}</h3>
        <ul>
          {menuItem}
        </ul>
      </li>
    );
  }
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data) {
      this.setState({
        items: this.props.data
      });
    }
  }

  render() {
    var menuData = this.state.items;
    return (
      <ul id={this.props.id} className={"menu-list " + this.props.className}>
        {
        Object.keys(menuData).map(function(result) {
           return <MenuSection key={result} label={result} data={menuData[result]}/>;
         })
        }
      </ul>
    );
  }
};

export default Menu;
