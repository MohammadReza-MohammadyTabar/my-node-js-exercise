const cs =
  "mongodb+srv://Maxell:Mohammad1211@nodeappproject.ef1yq2p.mongodb.net/myFirstDB?retryWrites=true&w=majority";
//connecting to database using mongoose
const mongoose = require("mongoose");

mongoose
  .connect(cs)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
// creating a schema for a collection
const kittySchema = new mongoose.Schema({
  name: String,
  age: Number,
  talk: String,
});
// adding a schema to a model
// when creating a model it will create a collection to the mongodb atlas or local by default
const kitten = mongoose.model("kitten", kittySchema);
// creating first data for the model
// const gogol = new kitten({
//   name: "gogol",
//   age: 2,
//   talk: "meow",
// });

// console.log(gogol);
// inserting the data to the mongodb sever
// async function saveToDB() {
//   await gogol
//     .save()
//     .then((d) => {
//       // console.log(d);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// saveToDB();
module.exports = { kittySchema, kitten };
