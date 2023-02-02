//using static for sending html file to client

const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
// static assets
// naming this SSR
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
  //or
  // res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
});
app.get("*", (req, res) => {
  console.log(req.url);
  res.status(404).send("not foound");
});

app.listen(5000, () => {
  console.log("listening poet 5000");
});
