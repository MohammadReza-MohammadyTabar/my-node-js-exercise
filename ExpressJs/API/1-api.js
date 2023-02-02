const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const address = path.resolve(__dirname, "data.json");
const bufferData = fs.readFileSync(address);
const data = JSON.parse(bufferData);
console.log(typeof bufferData);
// const { data } = require("./data.js");
app.get("/", (req, res) => {
  //   res.json([{ name: "mohammad" }, { name: "ali" }]);
  res.json(data);
});
app.listen(3000, () => {
  console.log("run on port 3000");
});
