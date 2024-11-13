import {
  addCartItem,
  getAllCartItems,
} from "../Controller/cartItem.controller.js";

export function cartRoutes(server) {
  server.get("/cart/:userId", getAllCartItems);
  server.post("/cart/add/", addCartItem);
}
