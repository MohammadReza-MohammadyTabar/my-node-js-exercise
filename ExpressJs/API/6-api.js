// app.use

const express = require("express");
const morgan = require("morgan");
const app = express();
const detail = require("./logic.js");

// app.use("/api", detail);
app.use(
  //third party midlleware
  morgan(
    ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
  )
);
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/catagory", (req, res) => {
  res.send("catagory");
});
app.get("/api/product", (req, res) => {
  res.send("product");
});

app.listen(5000, () => {
  console.log("on port 5000");
});
