require("dotenv").config();
require("express-async-errors");
const fileUpload = require("express-fileupload");
const express = require("express");
const app = express();
const productRouter = require("./routes/productRoutes");
const cloudinary = require("cloudinary").v2;
// database
const connectDB = require("./db/connect");

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
  res.send("<h1>File Upload Starter</h1>");
});

// middleware
app.use(express.static("./public"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);
app.use(express.json());
app.use("/api/v1/products", productRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
