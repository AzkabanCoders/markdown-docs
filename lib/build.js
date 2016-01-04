#!/usr/bin/env node
"use strict"
var cli = require("cli"),
    json = require("jsonfile"),
    metalsmith = require("metalsmith"),
    markdown = require("metalsmith-markdown"),
    collections = require("metalsmith-collections"),
    globMeta   = require("metalsmith-glob-meta"),
    prompt = require("metalsmith-prompt"),
    options = json.readFileSync(__dirname + "/../reactdocs.json", {throws : true}) || {},
    destFile = options.dist || __dirname + "/../app/resources/data.json";

module.exports = (function(obj) {
  function writeJson(files, metalsmith, done) {
    var data = {
      app: options,
      data:[]
    };
    for (var file in files) {
      files[file].contents = files[file].contents.toString();
      files[file].section = files[file].section || "others";
      files[file].id = file.replace(/\.md|\.html/, "").replace(/\//g,"__");
      // Removing unnecessaries properties...
      delete files[file].mode;
      delete files[file].stats;
      delete files[file].template;
      data.data.push(files[file])
    }
    cli.info("Creating data with markdown founded...");
    json.writeFileSync(destFile, {data: data}, {spaces: 2}, function (err) {
      cli.error(err);
    });
    cli.info("Reactdocs data created on: " + (options.dist || destFile));
    done();
  }

  function build(optionsObj) {
    var options = optionsObj || options;
    cli.info("Reading all markdown files from " + options.cwd);
    metalsmith(options.cwd || ".")
      .source(options.src)
      .use(globMeta({
        glob: options.filePattern || "",
        meta: {},
        overwrite: false
      }))
      .use(markdown({
        smartypants: true,
        gfm: true,
        tables: true
      }))
      .use(writeJson)
      .build(function(err, files) {
        if (err) cli.error(err);
      });
  }

  return {
    init: function(config){
      build(config);
    }
  }
})();
