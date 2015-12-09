"use strict";

import AppDispatcher from "../dispatcher/app-dispatcher";
import Constants from "../constants";
import EventEmitter from "events";

var menu = [
  "Menu-item 1",
  "Menu-item 2",
  "Menu-item 3",
  "Menu-item 4"
];

let CHANGE_EVENT = Constants.CHANGE_EVENT;

class MenuStore extends EventEmitter {
  constructor() {
    super();
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  getAll() {
    return menu;
  }
}

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case "CREATE_VERTICAL-MENU":
      menu.push(action.menu);
      MenuStore.emitChange();
      break;
    default:
  }
});

MenuStore.dispatchToken = null;

export default MenuStore;
