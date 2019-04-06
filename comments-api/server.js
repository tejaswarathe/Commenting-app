let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let Comment = require("./app/models/models");

mongoose
  .connect(
    "mongodb+srv://Tejas:qwertyuiop@comments-data-gnqah.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Succesfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database, Exiting now...", err);
    process.exit();
  }); //connect to database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 3030;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "welcome to the api!", name: "Tejas" });
});

require("./app/routes/routes.js")(app);

app.listen(port);
console.log("Magic happens" + port);
