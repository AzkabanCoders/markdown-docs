"use strict";

import Constants from "../constants/";

const content = (() => {

  let get = (data, id) => {
    if (typeof data !== "undefined") {
      if (!id) {
        return null;
      }
      let content = data.filter(function(data) {
        if (data.id.toString() === id.toString()) {
          return data;
        } else {
          return undefined;
        }
      });
      return content[0];
    } else {
      return {};
    }
  };

  return {
    get
  };
})();

export default content;
