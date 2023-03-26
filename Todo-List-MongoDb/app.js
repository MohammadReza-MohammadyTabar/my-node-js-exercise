const connectToDb = require("./db/connect");
const taskRoute = require("./route/routs");
const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/tasks", taskRoute);

async function db() {
  try {
    await connectToDb(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("listenning on 3000");
    });
  } catch (err) {
    console.log(err);
  }
}

db();
