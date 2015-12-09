#!/usr/bin/env node
"use strict"

var cli = require("cli"),
    json = require("jsonfile"),
    metalsmith = require("metalsmith"),
    collections = require("metalsmith-collections"),
    globMeta   = require("metalsmith-glob-meta"),
    prompt = require("metalsmith-prompt"),
    options = json.readFileSync("reactdocs.json", {throws : true}) || {},
    destFile = options.distData || "app/resources/data.json";

function writeJson(files, metalsmith, done){
  var data = [];
  for (var file in files) {
    files[file].contents = files[file].contents.toString();
    files[file].section = files[file].section || "others";
    files[file].id = file.replace(".md", "").replace(/\//g,"__");
    // Removing unnecessaries properties...
    delete files[file].mode;
    delete files[file].stats;
    delete files[file].template;
    data.push(files[file])
  }
  cli.info("Creating data with markdown founded...");
  json.writeFileSync(destFile, {data: data}, {spaces: 2}, function (err) {
    cli.error(err);
  });
  // cli.info("File created at " destFile);
  cli.info("Markdown data created on: " + options.distData);
  done();
}

cli.info("Reading all markdown files...");
metalsmith(options.cwd || ".")
  .source(options.source)
  .use(globMeta({
    glob: options.filePattern || "",
    meta: {},
    overwrite: false
  }))
  .destination(options.destination)
  .use(writeJson)
  .build(function(err, files) {
    if (err) cli.error(err);
  });
