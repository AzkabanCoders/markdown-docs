"use strict";

import React, {Component} from "react";
import { Router, Route, Link} from "react-router";
import Constants from "../../constants/";
// Styles
import css from "./styles/_menu-vertical";

var mountMenu = (obj) => {
  let builtMenu = {};
  for (var i = 0; i < obj.length; i++) {
    builtMenu[obj[i].section] = builtMenu[obj[i].section] || [];
    builtMenu[obj[i].section].push(obj[i]);
  }
  return builtMenu;
}

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
    return (
      <li>
        <h3>{this.props.label}</h3>
        <ul>
          {
            this.props.data.map(function(result) {
             return <MenuItem key={result.id} id={result.id} label={result.title} section={result.section}/>;
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
    this.state = {
      items: []
    };
  }

  fetchMenu(menuUrl) {
    let url = `${menuUrl}`;
    fetch(url)
      .then((req) => req.json())
      .then((res) => {
        this.setState({
          items : mountMenu(res.data.data)
        });
      })
      .catch((error) => console.log('Oops! . There Is A Problem', error));
  }

  componentDidMount() {
    if(this.props.url) {
      this.fetchMenu(this.props.url);
    } else if(this.props.data) {
      this.setState({
        items : this.props.data
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
