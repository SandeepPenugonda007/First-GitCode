const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(function(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("Index", {
    title: "Hello World",
    showTitle: false,
    people: ["john", "cena", "bigshow"]
  });
});
app.get("/about", (req, res) => {
  res.send("welcome to about mysef");
});
app.get("/gallary", (req, res) => {
  res.send("welcome to gallery...");
});
app.post("/new", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.node);

  res.send("posted ok");
});
app.listen(3000, () => {
  console.log("server started on port 3000");
});
