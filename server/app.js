const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

app.use(morgan("dev")); //logging middleware
app.use(express.static(path.join(__dirname, "./client"))); //serving up static files (e.g. css files)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use("/wiki", require("./routes/wiki"));
//app.use("/users", require("./routes/users"));

app.get('/', function (req, res) {
  res.send('hello')
});

module.exports = app;
