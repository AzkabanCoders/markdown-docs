#!/usr/bin/env node
"use strict";
var express = require("express"),
    http = require("http"),
    fs = require("fs-sync"),
    app = express(),
    cli = require("cli"),
    json = require("jsonfile"),
    helpme = require("./helpme"),
    options = cli.parse(helpme),
    builder = require("./build"),
    pkg = json.readFileSync(__dirname + "/../package.json", { throws: true }) || null,
    webpack = require("webpack"),
    webpackConf = require("./../webpack.config.js");

function compiler(conf, appConf) {
  var compiler = webpack(conf);
  compiler.run(function(err, stats) {

    // cli.info("Compiling app...");
    var statsObj = stats.toJson();
    cli.spinner("App Compiled!", true);
    cli.ok(stats.toString({
        "colors": true,
        "version": false,
        "chunks": false,
        "children": false,
        "assets": false,
        "hash": false
      }));
    copyFiles(appConf.dist);
    cli.ok("Reactdocs build has been finished! Compiled files is on " + appConf.dist, true);
    if (err) {
      cli.fatal(err);
    } else {
      startServer(appConf.dist);
    }
  });
}

function copyFiles(dist) {
  fs.mkdir(dist);
  fs.copy(__dirname + "/../app/index.html", dist + "/index.html", { "force": true });
  fs.copy(__dirname + "/../app/build", dist, { "force": true });
  fs.copy(__dirname + "/../app/images", dist + "/images", { "force": true });
  fs.copy(__dirname + "/../app/resources", dist + "/resources", { "force": true });
}

function startServer(staticPath) {
  cli.main(function(args, options) {
    if (options.server) {
      app.use("/", express.static(staticPath));
      app.set("port", options.port);
      http.createServer(app).listen(app.get("port"), function() {
        cli.ok("Reactdocs server listening on port: " + app.get("port"));
      });
    }
  });
}

cli.main(function(args, options) {
  if (options.version) {
    console.log(pkg.version);
  }
  if (options.config) {
    var config = json.readFileSync(options.config, { throws: true }) || null;
    builder.init(config);



    // webpackConf.output.path = config.dist
    if(options.compile) {
      compiler(webpackConf, config);
    }
  }
});
