const { Database } = require("arangojs");
const arango = require("arangojs");

const db = arango({
  url: "http://localhost:8529"
});
db.useDatabase("_system");
db.useBasicAuth("root", "");

module.exports = db;
