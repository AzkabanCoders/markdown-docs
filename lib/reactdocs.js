#!/usr/bin/env node
"use strict"
var cli = require("cli"),
    json = require("jsonfile"),
    helpme = require("./helpme"),
    options = cli.parse(helpme),
    builder = require("./build"),
    pkg = json.readFileSync(__dirname + "/../package.json", {throws : true}) || null,
    webpack = require("webpack"),
    webpackConf = require("./../webpack.config.js");

function compiler(conf, appConf) {
  var compiler = webpack(conf);
  compiler.run(function(err, stats) {
    cli.info("Compiling app...");
      var statsObj = stats.toJson();
      console.log(stats.toString({
        colors:true,
        version: false,
        chunks: false,
        children: false
      }));
      cli.info("Reactdocs compilation has been finished! Compiled files is on " + conf.output.path);
      if(err) {
        cli.fatal(err);
      }
  });
}

cli.main(function(args, options) {
  if(options.version) {
    console.log(pkg.version);
  }
  if (options.config) {
    var config = json.readFileSync(options.config, {throws : true}) || null;
    builder.init(config);
    webpackConf.output.path = config.dist
    compiler(webpackConf);
  }
});
