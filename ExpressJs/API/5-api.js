// midlleware

const express = require("express");
const app = express();
const detail = require("./logic.js");

app.get("/", detail, (req, res) => {
  res.send("home");
});

app.listen(5000, () => {
  console.log("on port 5000");
});
