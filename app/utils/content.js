"use strict";

import Constants from "../constants/";

const content = (() => {

  let htmlToText = (htmlString) => {
    const el = document.createElement("div");
    el.innerHTML = htmlString;
    return el.textContent;
  };

  let search = (data, terms) => {
    let filteredData = [];
    if (data && terms) {
      let regexp = new RegExp(`(${terms.filter(String).join("|")})`, "igm");

      data.map((curData) => {
        if (regexp.test(htmlToText(curData.contents))) {
          filteredData.push(curData);
        }
      });
    }
    return filteredData;
  };

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
    get,
    htmlToText,
    search
  };
})();

export default content;
