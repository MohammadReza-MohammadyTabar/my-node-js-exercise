const express = require("express");
const app = express();
const data = require("./data.js");
app.get("/", (req, res) => {
  res.send('<h1>hi</h1> <a href="/api/data">data</a>');
});
app.get("/api/data", (req, res) => {
  const products = data.map((product) => {
    const { title, price, image } = product;
    return { title, price, image };
  });
  res.json(products);
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
