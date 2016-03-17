"use strict";

import React, {Component} from "react";
import Constants from "../../constants/"
import { Router, Route, Link} from 'react-router';
import css from './styles/_menu-vertical';

import MenuStore from "./stores/MenuStore";
import MenuActions from "./actions/MenuActions";

// var MenuStore = require("../../stores/AppStore");

// var mountMenu = (obj) => {
//   let builtMenu = {};
//   for (var i = 0; i < obj.length; i++) {
//     builtMenu[obj[i].section] = builtMenu[obj[i].section] || [];
//     builtMenu[obj[i].section].push(obj[i]);
//   }
//   return builtMenu;
// }

class MenuItem extends Component {
  render() {
    return (
      <li className='menu-item'>
        <Link to={Constants.MENU_BASEPATH + this.props.section.toLowerCase() + "/" + this.props.id}>{this.props.label}</Link>
      </li>
    );
  }
};

class MenuSection extends Component {
  render() {
    return (
      <li>
        <h3>{this.props.label}</h3>
        <ul>
          {
            this.props.data.map(function(data) {
             return <MenuItem key={data.id} id={data.id} label={data.label} section={data.section}/>;
           })
          }
        </ul>
      </li>
    );
  }
};

class Menu extends Component {
  constructor(props) {
    super(props);
    // console.log(MenuActions.handleUpdateMenu);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    console.log("aaa");
    // MenuActions.fetch();
    // MenuStore.listen(this.onChange);
  }

  componentWillUnmount() {
    // MenuStore.unlisten(this.onChange);
  }


  render() {
    var menuData = this.state.items;
    return (
      <ul id={this.props.id} className={"menu-list " + this.props.className}>
        {
        Object.keys(menuData).map(function(data) {

           return <MenuSection key={data} label={data} data={menuData[data]}/>;
         })
        }
      </ul>
    );
  }
};

export default Menu;
