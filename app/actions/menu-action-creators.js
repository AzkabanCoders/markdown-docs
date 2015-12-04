"use strict";

import AppDispatcher from "../dispatcher/app-dispatcher";

module default {
  creatMenu: function(comment) {
    var action = {
      actionType: "CREATE_VERTICAL-MENU",
      menu: menu
    };
    AppDispatcher.dispatch(action);
  }
};
