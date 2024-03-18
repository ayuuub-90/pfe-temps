import express from "express";
const router = express.Router();
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddelwares.js";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  getTopProducts,
  getNewProducts,
  getProductByCategory,
  addReview,
} from "../controller/productController.js";

router
  .route("/")
  .post(authenticate, authorizeAdmin, createProduct)
  .get(getAllProducts);

router.route("/top-products").get(getTopProducts);
router.route("/new-products").get(getNewProducts);
router.route("/:id/review").post(authenticate, addReview);
router.route("/category/:categoryId").get(getProductByCategory)

router
  .route("/:id")
  .delete(authenticate, authorizeAdmin, deleteProduct)
  .put(authenticate, authorizeAdmin, updateProduct)
  .get(getProductById);

export default router;
