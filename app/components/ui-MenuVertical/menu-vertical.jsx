"use strict";

import React, { Component } from 'react';
import css from './styles/_menu-vertical';

class MenuVertical extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul id={this.props.id} className={"menu-list " + this.props.className}>
        <li>
          <h3>Menu title</h3>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </li>
        <li>
          <h3>Menu title 2</h3>
          <ul>
            <li>Item 1</li>
          </ul>
        </li>
        <li>
          <h3>Menu title</h3>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </li>
        <li>
          <h3>Menu title 2</h3>
          <ul>
            <li>Item 1</li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default MenuVertical;
