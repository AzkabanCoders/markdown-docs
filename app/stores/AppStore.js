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
AppSource = {
  app: AppSource.data.app,
  data: AppSource.data.data
}

class AppStore {
  constructor() {
    this.menu = [];

    this.exportPublicMethods({
      getMenu: this.getMenu,
      getData: this.getData,
      getAppOptions: this.getAppOptions
    });

    this.exportAsync(AppSource);
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

  getAppOptions() {    
    return AppSource.app;
  }
}

module.exports = alt.createStore(AppStore, "AppStore");
