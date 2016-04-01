module.exports = {
  config:  ["c", "json config path", "string", "../reactdocs.json"],
  compile: [false, "Generate app dist"],
  server:  ["s", "Start Reactdocs server"],
  port:    ["p", "Reactdocs server port", "number", 3000],
  version: ["V", "show reactdocs version"]
};
