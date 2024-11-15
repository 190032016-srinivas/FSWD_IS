import { validProductItem } from "../Models/productItems.model.js";

export async function addProductItem(req, res) {
  const newProductItemsArray = await validProductItem.create(req.body);
  if (!newProductItemsArray)
    res.status(400).json({ message: "something went wrong" });
  else res.status(200).send(newProductItemsArray);
}

export async function getAllProductItems(req, res) {
  const allProductItems = await validProductItem.find();
  if (!allProductItems)
    res.status(400).json({ message: "something went wrong" });
  else res.status(200).json({ products: allProductItems });
}
export async function getProductDetailsById(req, res) {
  if (req.params.productId.length !== 24)
    return res.status(400).json({ message: "invalid id length" });
  const productFromDb = await validProductItem.findOne({
    _id: req.params.productId,
  });
  if (!productFromDb) res.status(400).json({ message: "something went wrong" });
  else res.status(200).json({ productFromDb: productFromDb });
}
