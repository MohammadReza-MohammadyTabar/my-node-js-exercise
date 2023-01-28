const express = require("express");
const app = express();
const port = 3000;
app.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;
  res.send(`multiply = ${value1 * value2}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
