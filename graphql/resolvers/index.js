const fetchData = require("../../lib/fetchData");

const getFAQsQuery = require("../../arangodb/queries");
const db = require("../../arangodb/db");

module.exports = {
  faqs: async () => {
    try {
      const cursor = await db.query(getFAQsQuery);
      const responseData = cursor._result;
      return responseData;
    } catch (err) {
      throw err;
    }
  },
  homepageElement: async () => {
    try {
      const collection = db.collection("homepage");

      const cursor = await collection.all();
      const responseData = cursor._result[0];
      return responseData;
    } catch (err) {
      throw err;
    }
  }
};
