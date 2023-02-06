const express = require("express");
const path = require("path");
const app = express();
const { readFileSync, writeFileSync } = require("fs");
const rwo = readFileSync("./people.json");
const people = JSON.parse(rwo);
app.use(express.static("."));
app.use(express.urlencoded({ extended: false }));
//for getting data from post methods
app.use(express.json());
app.get("/", (req, res) => {
  console.log(people);
  res.send("done");
});
app.get("/api/people", (req, res) => {
  res.json(people);
});
app.post("/api/people", (req, res) => {
  if (!req.body.name) {
    res.status(401).json({ seccess: false, msg: "please set name!" });
  }
  people.push(req.body);
  writeFileSync("./people.json", JSON.stringify(people));
  res.status(201).send(people);
});
app.listen(4000, () => {
  console.log("on port 4000");
});
