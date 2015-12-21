"use strict";

var alt = require("../utils/alt");
import constants from "../constants/";
import MenuActions from "../actions/MenuActions";
var AppSource = {};

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

AppSource = getData(constants.API_ENDPOINT);

class AppStore {
  constructor() {
    this.menu = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateMenu: MenuActions.UPDATE_MENU,
      handleFetchMenu: MenuActions.FETCH_MENU,
      handleMenuFailed: MenuActions.MENU_FAILED
    });

    this.exportPublicMethods({
      getMenu: this.getMenu,
      getData: this.getData
    });

    this.exportAsync(AppSource);
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
    for (let i = 0; i < AppSource.data.length; i++) {
      if (id && AppSource.data[i].id === id) {
        return [mountMenuItem(AppSource.data[i])];
      } else {
        menu.push(mountMenuItem(AppSource.data[i]));
      }
    }
    return menu || [];
  }

  getData(id) {
    if(!id) {
      return null;
    }
    let content = AppSource.data.filter(function(data){
      if(data.id.toString() === id.toString()) {
        return data;
      } else {
        return undefined;
      }
    });
    return content[0];
  }
}

module.exports = alt.createStore(AppStore, "AppStore");
