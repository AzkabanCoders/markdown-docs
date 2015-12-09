"use strict";

import AppDispatcher from "../dispatcher/app-dispatcher";

module default {
  createMenu: function(menu) {
    var action = {
      actionType: "CREATE_VERTICAL-MENU",
      menu: menu
    };
    AppDispatcher.dispatch(action);
  }
};
