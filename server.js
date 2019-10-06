const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const cors = require("cors");

const graphQLSchema = require("./graphql/schema");
const graphQLResolvers = require("./graphql/resolvers");

const app = express();

dotenv.config();

app.use(cors()); // Can be configured later for real environments

app.use(bodyParser.urlencoded({ extended: true }));
//basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).

app.use(bodyParser.json());
//basically tells the system that you want json to be used

// Serve the static files from the React app served from 'client' folder in same directory
// app.use(express.static(path.join(__dirname, "client/build")));

//Hooking GraphQL Express Schema
app.use(
  "/graphql",
  graphqlHttp({
    //Schema, contains list of queries and mutations
    schema: graphQLSchema,

    //Resolvers, containing actual implementation of schema items
    rootValue: graphQLResolvers,

    //Enabled to use graphiql UI
    graphiql: true
  })
);

//production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));

//   app.get("*", (req, res) => {
//     res.sendfile(path.join((__dirname = "client/build/index.html")));
//   });
// }
// build mode
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/public/index.html"));
// });

let port = process.env.PORT || 3001;
if (port === 3000) {
  //Port 3000 reserved for client app
  console.log("PORT 3000 is already in use. Listening to port 3001 instead.");
  port = 3001;
}

// Reserving port 3001 for backend server for now, later in production it can be dynamically configured from environment variables
app.listen(port);

console.log("Server is listening on port " + port);
