const customError = require("../errors");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const uploadProductImageLocal = async (req, res) => {
  if (!req.files) {
    throw new customError.BadRequestError("no file uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new customError.BadRequestError("please upload an image");
  }
  const maxSize = process.env.MAX_SIZE_IMAGE;
  if (productImage.size > maxSize) {
    throw new customError.BadRequestError(
      "please upload image under 400KB size"
    );
  }
  const dateName = Date.now();
  const extension = productImage.name.split(".").pop();
  console.log(extension);
  const imagePath = path.join(
    __dirname,
    "../public/upload/" + `${dateName}` + `.${extension}`
  );
  await productImage.mv(imagePath);

  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/upload/` + `${dateName}` + `.${extension}` } });
};
const uploadProductImage = async (req, res) => {
  // console.log(req.files.image);
  if (!req.files) {
    throw new customError.BadRequestError("no file uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new customError.BadRequestError("please upload an image");
  }
  const maxSize = process.env.MAX_SIZE_IMAGE;
  if (productImage.size > maxSize) {
    throw new customError.BadRequestError(
      "please upload image under 400KB size"
    );
  }

  const { url } = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "img",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  res.json({ src: url });
};
module.exports = { uploadProductImageLocal, uploadProductImage };
