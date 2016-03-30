"use strict";

import React, {Component} from "react";
import Constants from "../../constants/"
import { Router, Route, Link} from "react-router";
import css from "./styles/_menu-vertical";

var mountMenu = (content) => {
  let data = content.data.data,
      menu = [];
  for (let i = 0; i < data.length; i++) {
    menu.push({
      "id": data[i].id,
      "label": data[i].title,
      "url": Constants.APP_BASEPATH + data[i].title,
      "section": data[i].section
    });
  }
  return menu || [];
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
    console.log(this.props);
    return (
      <li>
        <h3>{this.props.label}</h3>
        <ul>
          {
            this.props.data.map(function(result) {
             return <MenuItem key={result.id} id={result.id} label={result.label} section={result.section}/>;
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
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items : mountMenu(data)
        });
      })
      .catch((error) => console.log('Oops! . There Is A Problem', error));
  }

  componentDidMount() {
    this.fetchMenu(`${Constants.API_HOST}/${Constants.API_MENU_ENDPOINT}`);
  }

  render() {
    var menuData = this.state.items;
    return (
      <ul id={this.props.id} className={"menu-list " + this.props.className}>
        {
        Object.keys(menuData).map(function(result) {
           return <MenuSection key={menuData[result].section} label={menuData[result].section} data={menuData}/>;
         })
        }
      </ul>
    );
  }
};

export default Menu;
