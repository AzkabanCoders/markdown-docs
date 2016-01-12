#!/usr/bin/env node
"use strict"
var cli = require("cli"),
    json = require("jsonfile"),
    helpme = require("./helpme"),
    options = cli.parse(helpme),
    builder = require("./build"),
    pkg = json.readFileSync(__dirname + "./../package.json", {throws : true}) || null;

cli.main(function(args, options) {
  if(options.version) {
    console.log(pkg.version);
  }
  if (options.config) {
    var config = json.readFileSync(options.config, {throws : true}) || null;
    builder.init(config);
  }
});
