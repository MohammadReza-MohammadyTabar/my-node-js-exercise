//using static for showing index html

const express = require("express");
const path = require("path");
const app = express();

// use this line for send index.html automaticly
// not like using pervios file
// if i put index.html in public folder it will automaticly set it for '/' requests in url
app.use(express.static("./public"));

app.get("*", (req, res) => {
  console.log(req.url);
  res.status(404).send("not foound");
});

app.listen(5000, () => {
  console.log("listening poet 5000");
});
