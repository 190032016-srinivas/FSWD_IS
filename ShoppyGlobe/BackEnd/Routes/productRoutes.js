import {
  addProductItem,
  getAllProductItems,
  getProductDetailsById,
} from "../Controller/productItem.controller.js";

export function productRoutes(server) {
  server.get("/products", getAllProductItems);
  server.get("/products/:productId", getProductDetailsById);
  server.post("/products/add", addProductItem);
}
