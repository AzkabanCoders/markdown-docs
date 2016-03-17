"use strict";

// import restful from "restful.js";

// var api = restful().fullUrl("/resources/data.json");
import constants from "../constants/";
import restful, { fetchBackend } from "restful.js";
const api = restful(constants.API_HOST, fetchBackend(fetch)).custom("resources/data.json");

export default api;