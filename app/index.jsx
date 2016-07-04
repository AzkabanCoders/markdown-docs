"use strict";

import routes from "./routes";
import ReactDOM, {render} from "react-dom";

render(routes, document.getElementById("app"));



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', {
    scope: './../'
  }).then(function(registration) {
    if (typeof registration.update == 'function') {
      registration.update();
    }
  }).catch(function(e) {
    console.error('Error during service worker registration:', e);
  });
}
