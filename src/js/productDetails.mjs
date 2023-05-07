import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

export default async function productDetails(productId) {
  let product = await findProductById(productId);
  renderProductDetails(product);
  // add listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCartHandler);
}

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}
  
function renderProductDetails(product) {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productType").innerText = product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productPrice").innerText = product.FinalPrice;
  document.querySelector("#productColor").innerText = product.Colors[0].ColorName;
  document.querySelector("#productDescription").innerHTML = product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}