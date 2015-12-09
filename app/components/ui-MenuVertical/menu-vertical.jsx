"use strict";

import React, { Component } from "react";
import Constants from "../../constants/"
import css from './styles/_menu-vertical';

var MenuStore = require("../../stores/MenuStore");
var MenuActions = require("../../actions/MenuActions");

var mountMenu = (obj) => {
  let builtMenu = [];
  for (var i = 0; i < obj.length; i++) {
    builtMenu[obj[i].section] = builtMenu[obj[i].section] || [];
    builtMenu[obj[i].section].push(obj[i]);
  }
  return builtMenu;
}

class MenuVertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        items: MenuStore.getMenu()
      }
    };
  }

  render() {
    var completeMenu = mountMenu(this.state.menu.items),
        menu = Object.keys(completeMenu).map(function(section, i) {
          var menuItems = completeMenu[section].map(function(menu, i) {
            return (
              <li className='menu-item'  key={'menu-item-' + i}>
                <a href={Constants.APP_BASEPATH + menu.section + "/" + menu.id}>{menu.label}<span>{menu.lastUpdate}</span></a>
              </li>
            )
          });
          return (
            <li>
              <h3>{section}</h3>
              <ul>
                {menuItems}
              </ul>
            </li>
          )
        });

    return (
      <ul id={this.props.id} className={"menu-list " + this.props.className}>
        {menu}
      </ul>
    );
  }
}

export default MenuVertical;
