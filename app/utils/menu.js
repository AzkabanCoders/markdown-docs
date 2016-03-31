"use strict";

import Constants from "../constants/";

const menu = (() => {

  var mount = (obj) => {
    let builtMenu = {};
    for (var i = 0; i < obj.length; i++) {
      builtMenu[obj[i].section] = builtMenu[obj[i].section] || [];
      builtMenu[obj[i].section].push(obj[i]);
    }
    return builtMenu;
  };

  return {
    mount
  };
})();

export default menu;
