const { readFileSync, writeFileSync } = require("fs");
const rowData = readFileSync("./data.json");
const data = JSON.parse(rowData);
const postTask = (req, res) => {
  if (!req.body.task) {
    res.status(401).json({ seccess: false, msg: "please enter task!" });
  }
  req.body.id = data[data.length - 1].id + 1;
  data.push(req.body);
  writeFileSync("./data.json", JSON.stringify(data));
  console.log(req.body);

  res.status(201).send(req.body);
};
const getTasks = (req, res) => {
  res.status(200).json(data);
};
const deleteTask = (req, res) => {
  console.log(req.params.task);
  const n = [];
  data.forEach((task) => {
    if (task.id !== Number(req.params.task)) {
      n.push(task);
    }
  });

  writeFileSync("./data.json", JSON.stringify(n));
  console.log(n);
  res.status(200).send(n);
};
module.exports = {
  postTask,
  getTasks,
  deleteTask,
};
