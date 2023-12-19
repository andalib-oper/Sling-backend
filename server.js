// Express example for handling image upload
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.Promise = global.Promise;
const dbConfig = require("./config/database.config.js");
const imageRoutes = require("./app/routes/image.route.js");
const fileUpload = require("express-fileupload");
app.use(fileUpload());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to Sling application. Take notes quickly. Organize and keep track of all your notes.",
  });
});
app.use("/uploads", express.static("uploads"));
app.use("/api", imageRoutes);
app.listen(3005, () => {
  console.log("Server running on port 3005");
});
