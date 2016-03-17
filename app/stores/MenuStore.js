var alt = require("../../utils/vendor/alt/alt");
    MenuActions = require("../actions/MenuActions"),
    constants = require("../constants/");

import restful, { fetchBackend } from "restful.js";

const api = restful(constants.API_ENDPOINT, fetchBackend(fetch));

console.log("api", api)

var mountMenuItem = (obj) => {
  return {
    "id": obj.id,
    "label": obj.title,
    "url": constants.APP_BASEPATH + obj.title,
    "section": obj.section
  }
}

class MenuStore {
  constructor() {
    this.menu = [];

    this.bindListeners({
      handleUpdateMenu: MenuActions.UPDATE_MENU
    });
  }

  handleUpdateMenu(menu) {
    this.locations = locations;
  }
}

module.exports = alt.createStore(MenuStore, "MenuStore");
