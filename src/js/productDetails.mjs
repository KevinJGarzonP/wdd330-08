export default async function productDetails(productId) {
    
}

// add to cart button event handler
async function addToCartHandler(e) {
    const product = await findProductById(e.target.dataset.id);
    addProductToCart(product);
  }
  
// add listener to Add to Cart button
document
.getElementById("addToCart")
.addEventListener("click", addToCartHandler);

function renderProductDetails() {
    
}