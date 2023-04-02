const { Router } = require("express");
const router = Router();

const {
  createProduct,
  getAllProduct,
} = require("../controllers/productController");
const {
  uploadProductImageLocal,
  uploadProductImage,
} = require("../controllers/uploadsController");

router.route("/").get(getAllProduct).post(createProduct);
router.route("/uploadlocal").post(uploadProductImageLocal);
router.route("/upload").post(uploadProductImage);

module.exports = router;
