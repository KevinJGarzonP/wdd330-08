import { getData } from "./productData.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
        <img
            src="${product.Image}"
            alt="${product.Name}"
        />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.ListPrice}</p></a>
    </li>`;
}

function renderList(productCardTemplate, element, list, position = "afterbegin", clear = true) {
    if (clear) {
        element.innerHTML = "";
    }
    
    const htmlCard = list.map(productCardTemplate);

    element.insertAdjacentHTML(position, htmlCard.join(""));
}

export default async function productList(category, selector) {
    
    const element = document.querySelector(selector);

    let list = await getData(category);
    console.log(list);

    renderList(productCardTemplate, element, list);
}