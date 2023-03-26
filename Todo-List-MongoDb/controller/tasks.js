const Task = require("../models/Task");
const getTasks = async (req, res) => {
  const data = await Task.find();
  res.status(200).json(data);
};
const postTask = async (req, res) => {
  const t = await Task.create(req.body);
  res.status(201).json({ t });
};
const deleteTask = async (req, res) => {
  console.log(req.params.p);
  //   const t = await Task.deleteOne(req.body)
  //     .then(() => {
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     });
  res.status(200).json();
};
module.exports = { getTasks, postTask, deleteTask };
