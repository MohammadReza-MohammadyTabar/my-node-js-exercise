// tradtional post methd call from front
const express = require("express");

const app = express();
app.use(express.static("."));
// body parse to encode body of post req
app.use(express.urlencoded({ extended: false }));
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`<h2>Hi ${name}</h2>`);
    return;
  }
  res.status(401).send("<h2>Bad Request</h2>");
});
app.post("*", (req, res) => {
  res.status(404).send("not found");
});
app.get("/", (req, res) => {});

app.listen(4000, () => {
  console.log("on port 4000");
});
