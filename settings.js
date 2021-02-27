// this file contains the example for the configurations necessary for the server
// Create a new file called settings.js and copy/paste the code below and
// replace the examples with your own settings

// connection string for MongoDB. If using MongoDB Atlas, use the string given
// by clicking on your cluster -> "connect" -> "Connect your application"
// Don't forget to substitute usename, password, and cluster!!
const PGURI =
  "postgres://qsnhncba:MiR7KIvVy67590jiR7XMrezFk_ftBEGc@ziggy.db.elephantsql.com:5432/qsnhncba";

// Google OAuth
const clientID =
  "882541225451-5r08e73d6ar39drlkqjalk3oa9lqeukq.apps.googleusercontent.com";

const clientSecret = "thor62giuJGQ-BiXZdFZXSrW";

// your dabatase name inside the cluster.
const dbName = "soloProject";

//Yelp Client ID
const yelpKey =
  "0nguY6g4ca_BorOfDlpJkb1NewDimVd6vCySnsmVUXlbakZUv2NHrIOPdOcM9gfJL86BChy4jyZ2OEmQDDxcv-en2qwUw2aJx2XmibM-oqPCl9lXGgnOXdVWOrT5X3Yx";

// // your name of collection that stores closed stores
// const closedStores = "closedstores";

module.exports = {
  PGURI,
  dbName,
  // closedStores,
  clientID,
  clientSecret,
};
