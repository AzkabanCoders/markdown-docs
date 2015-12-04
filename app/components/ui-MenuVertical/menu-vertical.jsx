"use strict";

import React, { Component } from 'react';
import Store from "../../stores/menu-store";
import css from './styles/_menu-vertical';

let MenuStore = new Store();

function getStateFromStore() {
  return {
    menu: MenuStore.getAll()
  }
}

class MenuVertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.state = getStateFromStore();
  }
  onChange() {
    this.setState(getStateFromStore());
  }
  // getInitialState() {
  //   return getStateFromStore();
  // }
  componentDidMount() {
    MenuStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    MenuStore.removeChangeListener(this.onChange);
  }

  render() {
    var menuItems = this.state.menu.map(function(menu, index) {
      return (
        <li className='menu-item'  key={'menu-item-' + index}>
          <a href="#">{menu}</a>
        </li>
      )
    });

    return (
      <ul id={this.props.id} className={"menu-list " + this.props.className}>
        <li>
          <h3>Menu title</h3>
          <ul>
            {menuItems}
          </ul>
        </li>
      </ul>
    );
  }
}

export default MenuVertical;
