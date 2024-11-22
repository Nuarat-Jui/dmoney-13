const newman = require("newman");
require('dotenv').config();

newman.run(
  {
    collection: `https://api.postman.com/collections/39820932-25b7a610-65e1-441c-be4c-3fc85968196b?access_key=${process.env.ACCESS_KEY}`,
    //collection:require('./collection/collection.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    environment: "./env.json",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
