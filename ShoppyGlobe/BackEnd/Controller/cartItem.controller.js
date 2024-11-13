import { validCartItem } from "../Models/cartItems.model.js";

export async function addCartItem(req, res) {
  const cartitem = req.body;
  console.log("hitting add cart api=", cartitem);
  const existingCartItem = await validCartItem.findOne({ id: cartitem.id });
  if (existingCartItem) {
    return res.status(400).json({ message: "cart item already added " });
  }
  const newCartItem = await validCartItem.create(req.body);
  if (!newCartItem) res.status(400).json({ message: "something went wrong" });
  else res.status(200).send(newCartItem);
}

export async function getAllCartItems(req, res) {
  const allCartItems = await validCartItem.find({ userId: req.params.userId });
  res.status(200).send(allCartItems);
  // if (!allCartItems.length)
  //   res.status(400).json({ message: "something went wrong" });
  // else res.status(200).send(allCartItems);
}
