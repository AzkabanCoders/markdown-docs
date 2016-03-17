"use strict";

var alt = require("../../../utils/vendor/alt/alt");

import MenuActions from "../actions/MenuActions";
import constants from "../../../constants/";
// import restful, { fetchBackend } from "restful.js";
// const api = restful(constants.API_HOST, fetchBackend(fetch)).custom("resources/data.json");

// var mountMenuItem = (obj) => {
//   return {
//     "id": obj.id,
//     "label": obj.title,
//     "url": constants.APP_BASEPATH + obj.title,
//     "section": obj.section
//   }
// }

// var mountMenu = (content) => {
//   let data = content.data.data,
//       menu = [];
//   for (let i = 0; i < data.length; i++) {
//     menu.push(mountMenuItem(data[i]));
//   }
//   return menu || [];
// }

class MenuStore {
  // constructor() {
  //   this.menu = [];

  //   this.exportPublicMethods({
  //     fetchMenu: this.fetchMenu,
  //     updateMenu: this.updateMenu
  //   });

  //   this.bindListeners({
  //     fetchMenu: MenuActions.FETCH_MENU,
  //     updateMenu: MenuActions.UPDATE_MENU
  //   });
  // }

  // fetchMenu() {
  //   return api.get().then((response) => {
  //     this.menu = mountMenu(response.body().data());
  //   });
  // }

  // updateMenu(menu) {
  //   this.menu = locations;
  // }

  constructor() {
    this.bindListeners({
      handleUpdateMenu: MenuActions.UPDATE_MENU,
      handleFailedMenu: MenuActions.FAILED_MENU
    });
    this.menu = [];
    this.error = null;
  }

  handleUpdateMenu(menu) {
    this.menu = menu;
  }

  handleFailedMenu(err) {
    this.error = err;
  }
}

module.exports = alt.createStore(MenuStore, "MenuStore");
