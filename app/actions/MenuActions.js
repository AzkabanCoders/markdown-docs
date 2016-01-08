"use strict";

import alt from "../utils/vendor/alt/alt";

class MenuActions {
  updateMenu(menu) {
    this.dispatch(menu);
  }

  fetchMenu() {
    this.dispatch();
  }

  menuFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(MenuActions);
