const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("run on port 3000");
});
app.get("/", (req, res) => {
  res.status(200).send("home page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});
