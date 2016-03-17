"use strict";
import alt from "../../../utils/alt";
import api from "../../../utils/api";
import constants from "../../../constants/";
// import MenuStore from "../stores/MenuStore";
//
var mountMenuItem = (obj) => {
  return {
    "id": obj.id,
    "label": obj.title,
    "url": constants.APP_BASEPATH + obj.title,
    "section": obj.section
  }
}

var mountMenu = (content) => {
  let data = content.data.data,
      menu = [];
  for (let i = 0; i < data.length; i++) {
    menu.push(mountMenuItem(data[i]));
  }
  return menu || [];
}

class MenuActions {
  fetchSuccess(menu) {
    return menu;
  }

  fetch() {
    return (dispatch) => {
      dispatch();
      api.get().then((res) => {
        if (res) {
          var menu = mountMenu(res.body().data());
          this.fetchSuccess(menu);
        }
      });
    }
  }
}

export default alt.createActions(MenuActions);

// export default MenuActions;
