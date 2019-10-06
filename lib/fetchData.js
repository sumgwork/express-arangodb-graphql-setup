const fs = require("fs");

module.exports = function(objectType) {
  try {
    //Read content of CMS data file
    let parsedData = JSON.parse(
      fs.readFileSync("./dataSource/data.json", "utf8")
    );

    //Checking for validity of requested object
    if (parsedData && parsedData[objectType]) {
      obj = parsedData[objectType];
    } else {
      return null;
    }
    return obj;
  } catch (err) {
    //Propogates error to graphql resolver
    throw err;
  }
};
