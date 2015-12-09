"use strict";

var alt = require("../utils/alt");
import constants from "../constants/";
import MenuActions from "../actions/MenuActions";
var MenuSource = {};

var getData = (url) => {
  let data = {};
  $.ajax({
      url: url,
      success: function (result) {
          data = result
      },
      async: false
  });
  return data;
}

var mountMenuItem = (obj) => {
  return {
    "id": obj.id,
    "label": obj.title,
    "url": constants.APP_BASEPATH + obj.title,
    "section": obj.section
  }
}

MenuSource = getData(constants.API_MENU_ENDPOINT);

class MenuStore {

  constructor() {
    this.menu = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateMenu: MenuActions.UPDATE_MENU,
      handleFetchMenu: MenuActions.FETCH_MENU,
      handleMenuFailed: MenuActions.MENU_FAILED
    });

    this.exportPublicMethods({
      getMenu: this.getMenu
    });

    this.exportAsync(MenuSource);
  }

  handleUpdateMenu(menu) {
    this.menu = menu;
    this.errorMessage = null;
  }

  handleFetchMenu() {
    this.menu = [];
  }

  handleMenuFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  getMenu(id) {
    let menu = [];
    for (let i = 0; i < MenuSource.data.length; i++) {
      if (id && MenuSource.data[i].id === id) {
        return [mountMenuItem(MenuSource.data[i])];
      } else {
        menu.push(mountMenuItem(MenuSource.data[i]));
      }
    }
    return menu || [];
  }
}

module.exports = alt.createStore(MenuStore, "MenuStore");
